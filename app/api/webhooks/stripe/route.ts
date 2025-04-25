import { NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const reqHeaders = await headers();
  const signature = reqHeaders.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Stripe webhook error:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // ✅ Handle event types
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("Payment complete for session:", session.id);

      const userId = session.metadata?.user_id;
      if (!userId) {
        return new Response("No user_id in metadata", { status: 400 });
      }

      const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );

      // 1. Fetch current credits
      const { data: creditData, error: creditError } = await supabaseAdmin
        .from("credit_balances")
        .select("credits")
        .eq("user_id", userId)
        .single();

      if (creditError || !creditData) {
        return new Response("Could not fetch credit info", { status: 500 });
      }

      const currentCredits = creditData.credits;

      // Fetch line items from the session
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id,
        {
          expand: ["data.price.product"],
        }
      );

      const item = lineItems.data[0];
      const priceMetadata = item.price?.metadata;
      const creditsToAdd = parseInt(priceMetadata?.credits || "0", 10);

      if (!creditsToAdd) {
        return new Response("Missing credits in metadata", { status: 400 });
      }

      const { error: updateError } = await supabaseAdmin
        .from("credit_balances")
        .update({ credits: currentCredits + creditsToAdd })
        .eq("user_id", userId);

      if (updateError) {
        return new Response("Could not update credits", { status: 500 });
      }

      console.log(
        "Credits updated successfully",
        userId,
        currentCredits + creditsToAdd
      );

      // TODO: trigger email
      return new Response("Credits updated", { status: 200 });
  }

  return new Response("OK", { status: 200 });
}
