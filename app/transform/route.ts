import { NextRequest } from "next/server";
import OpenAI from "openai";
import { sleep } from "openai/core.mjs";

export async function GET(request: NextRequest) {
  // const client = new OpenAI({
  //   apiKey: process.env["OPENAI_API_KEY"],
  // });

  // const response = await client.responses.create({
  //   model: "gpt-4o-mini",
  //   input: "Write a one-sentence bedtime story about a unicorn.",
  // });

  await sleep(3000);

  return Response.json({});
  // return Response.json(response);
}
