# Digital Store

A Next.js store for selling digital products with Stripe and Razorpay integration.

## Features

- Product catalog with multiple product types
- Stripe and Razorpay checkout
- Order confirmation page
- Placeholder for webhook handlers (to be implemented on EC2 for WhatsApp integration)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file with the following variables:
   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

This app is configured to deploy to Vercel via GitHub integration.

## Webhooks

The webhook handlers in `app/api/webhook/` are placeholders. In a production setup, you would:
1. Move the webhook handlers to your EC2 server (so they can access the WhatsApp daemon)
2. Or, have the Vercel webhook handlers call a secure API on your EC2 to trigger the WhatsApp message and delivery logic.

## License

MIT
