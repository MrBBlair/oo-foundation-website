import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment." },
        { status: 503 }
      );
    }
    const stripe = new Stripe(secretKey);
    const { amount } = await req.json();
    const amountInCents = Math.round(Number(amount) * 100);

    if (amountInCents < 50) {
      return NextResponse.json(
        { error: "Minimum donation amount is $0.50" },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "donate",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation to OOSBF",
              description:
                "Support scholarships and community programs in the Greater Daytona Beach area.",
              images: [],
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/donate?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Payment failed" },
      { status: 500 }
    );
  }
}
