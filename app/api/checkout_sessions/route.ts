import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";
import { createClientForServer } from "@/utils/supabase/server";

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
  10:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? "price_1RHQOIBDY99o9YSgW9kW2ywV"
      : "price_1RHPzGBBqQLumPCijoJbawYW",
  25:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? "price_1RHQPdBDY99o9YSgFuHnq7pb"
      : "price_1RHQ01BBqQLumPCiX80IlDaN",
};

export async function POST(request: Request) {
  try {
    const supabase = await createClientForServer();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const headersList = await headers();
    const origin = headersList.get("origin");
    const { credits } = await request.json();

    const priceId = CREDIT_PRODUCT_MAP[credits];

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: {
        user_id: user.id,
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
