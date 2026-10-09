
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const shasum = crypto.createHmac('sha256', secret);
  shasum.update(await request.text());
  const digest = shasum.digest('hex');

  const receivedSignature = request.headers.get('x-razorpay-signature');

  if (digest !== receivedSignature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const payload = await request.json();

  // Handle the event
  switch (payload.event) {
    case 'payment.captured':
      const payment = payload.payload.payment.entity;
      // Handle successful payment
      // In a real app, you would:
      // 1. Verify the payment with your database
      // 2. Generate a download link or license key
      // 3. Send a WhatsApp message via your EC2 daemon
      // 4. Send an email
      // 5. Update the order status in your database
      console.log('Razorpay payment captured:', payment.id);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event: ${payload.event}`);
  }

  return NextResponse.json({ received: true });
}
