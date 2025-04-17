import fs from "fs";
import path from "path";
import { createClientForServer } from "@/utils/supabase/server";
import { NextRequest } from "next/server";
import OpenAI from "openai";
import { sleep } from "openai/core.mjs";

export async function GET(request: NextRequest) {
  const supabase = await createClientForServer();
  // const client = new OpenAI({
  //   apiKey: process.env["OPENAI_API_KEY"],
  // });

  // const imagePath = path.join(process.cwd(), "public", "sketch-og.jpg");
  // const base64Image = fs.readFileSync(imagePath, "base64");

  // console.log({ base64Image });

  // const response = await client.responses.create({
  //   model: "gpt-4o",
  //   input: [
  //     {
  //       role: "user",
  //       content: [
  //         {
  //           type: "input_text",
  //           text: "Convert this image into pixar art style",
  //         },
  //         {
  //           type: "input_image",
  //           image_url: `data:image/jpeg;base64,${base64Image}`,
  //           detail: "high",
  //         },
  //       ],
  //     },
  //   ],
  // });

  await sleep(1000);

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const creditsResp = await supabase
    .from("credit_balances")
    .select("credits")
    .eq("user_id", user?.id)
    .single();

  if (creditsResp.error) {
    return Response.json({ error: "Failed to fetch credits" }, { status: 500 });
  }

  if (!creditsResp.data || creditsResp.data?.credits <= 0) {
    return Response.json({ error: "Not enough credits" }, { status: 403 });
  }

  const { data: updateData, error: updateError } = await supabase
    .from("credit_balances")
    .upsert({
      user_id: user.id,
      credits: creditsResp.data.credits - 1,
    })
    .select()
    .single();

  if (updateError) {
    return Response.json(
      { error: "Failed to update credits" },
      { status: 500 }
    );
  }

  return Response.json({
    success: true,
    remainingCredits: updateData.credits,
    // openai_resp: response,
  });
}
