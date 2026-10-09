
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const productSlug = searchParams.get('product');

  useEffect(() => {
    // In a real app, you would verify the session with Stripe/Razorpay
    // and then show the actual download link or instructions
    console.log('Payment successful for session:', sessionId);
  }, [sessionId, productSlug]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Thank you for your purchase!</h1>
      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your order is complete.</h2>
        <p className="mb-4">
          We've processed your payment and sent the download link to your WhatsApp and email.
          Please check your WhatsApp for the download link (it may take a minute to arrive).
        </p>
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">Order Details:</h3>
          <p className="text-sm">Session ID: {sessionId}</p>
          <p className="text-sm">Product: {productSlug}</p>
        </div>
      </div>
      
      <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Continue shopping
      </Link>
    }
  );
}
