import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

const CREDIT_PRODUCT_MAP: Record<number, string> = {
  20: "price_1RGF75BBqQLumPCiC8LmH6zz", // $2.99 → 299 cents
  50: "price_1RGHaaBBqQLumPCibS8ZLAbQ", // $4.99 → 499 cents
};

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const { credits } = await request.json();

    const priceId = CREDIT_PRODUCT_MAP[credits];

    console.log(priceId);
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
