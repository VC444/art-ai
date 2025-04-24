import { createClientForServer } from "@/utils/supabase/server";
import { NextRequest } from "next/server";
import OpenAI, { toFile } from "openai";
import { artStyles } from "@/utils/art-styles";

export async function POST(request: NextRequest) {
  const supabase = await createClientForServer();

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
    .eq("user_id", user.id)
    .single();

  if (creditsResp.error) {
    return Response.json({ error: "Failed to fetch credits" }, { status: 500 });
  }

  if (!creditsResp.data || creditsResp.data?.credits <= 0) {
    return Response.json({ error: "Not enough credits" }, { status: 403 });
  }

  const client = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
  });

  const { image, style } = await request.json();

  const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
  const imageBuffer = Buffer.from(base64Data, "base64");

  const originalImage = await toFile(imageBuffer, "image.png", {
    type: "image/png",
  });

  const selectedStyle = artStyles.find((artStyle) => artStyle.id === style);

  if (!selectedStyle?.prompt) {
    return Response.json({ error: "Art style not supported" }, { status: 400 });
  }

  const rsp = await client.images.edit({
    model: "gpt-image-1",
    image: originalImage,
    prompt: selectedStyle.prompt,
    quality: "high",
  });

  const { data: updateData, error: updateError } = await supabase
    .from("credit_balances")
    .update({
      credits: creditsResp.data.credits - 1,
    })
    .eq("user_id", user.id)
    .select()
    .single();

  if (updateError) {
    return Response.json(
      { error: "Failed to update credits" },
      { status: 500 }
    );
  }

  // @ts-ignore
  if (!rsp.data[0].b64_json) {
    return Response.json(
      { error: "Failed to generate image. Base64 encoding not received." },
      { status: 500 }
    );
  }

  return Response.json({
    remainingCredits: updateData.credits,
    // @ts-ignore
    image: rsp.data[0].b64_json,
    rsp,
  });
}
