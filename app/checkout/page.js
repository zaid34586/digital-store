
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Checkout() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would create a checkout session here
    // For now, we'll redirect to the product page with a mock session
    // This is just a placeholder
    router.push('/');
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Processing checkout...</h1>
        <p className="text-gray-500">Redirecting to payment gateway...</p>
      </div>
    )
  );
}
