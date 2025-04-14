import { createClientForServer } from "@/utils/supabase/server";
import { NextRequest } from "next/server";
import OpenAI from "openai";
import { sleep } from "openai/core.mjs";

export async function GET(request: NextRequest) {
  const supabase = await createClientForServer();
  // const client = new OpenAI({
  //   apiKey: process.env["OPENAI_API_KEY"],
  // });

  // const response = await client.responses.create({
  //   model: "gpt-4o-mini",
  //   input: "Write a one-sentence bedtime story about a unicorn.",
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
  });
}
