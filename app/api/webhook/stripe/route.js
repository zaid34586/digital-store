
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  const buf = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Handle successful checkout
      // In a real app, you would:
      // 1. Verify the session with your database
      // 2. Generate a download link or license key
      // 3. Send a WhatsApp message via your EC2 daemon
      // 4. Send an email
      // 5. Update the order status in your database
      console.log('Stripe checkout session completed:', session.id);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
