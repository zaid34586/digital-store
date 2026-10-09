
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProductDetail({ params }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in reality, fetch from a database or CMS
  const product = {
    id: params.slug,
    title: params.slug === 'course-1' ? 'Complete Web Development Course' : 
            params.slug === 'ebook-1' ? 'Ultimate Guide to Digital Marketing' : 
            'Notion Template Bundle',
    price: params.slug === 'course-1' ? 2999 : 
           params.slug === 'ebook-1' ? 499 : 799,
    description: params.slug === 'course-1' ? 
                 'Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 5 real-world projects.' : 
                 params.slug === 'ebook-1' ? 
                 'Master SEO, social media, email marketing, and paid ads to grow your business online.' : 
                 'A collection of 10 premium Notion templates for productivity, project management, and personal use.',
    image: params.slug === 'course-1' ? '/images/course1.jpg' : 
           params.slug === 'ebook-1' ? '/images/ebook1.jpg' : 
           '/images/template1.jpg'
  };

  const handleCheckout = async () => {
    // In a real app, you would create a Stripe or Razorpay checkout session here
    // For now, we'll just redirect to a success page with a mock session ID
    router.push(`/success?session_id=mock_session_${Date.now()}&product=${params.slug}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <img 
            src={product.image} 
            alt={product.title} 
            className="rounded-lg w-full h-96 object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-bold text-green-600">₹{product.price.toLocaleString()}</p>
          
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium">Quantity:</label>
            <input 
              type="number" 
              value={quantity} 
              min={1} 
              max={10} 
              className="w-20 px-2 py-1 border rounded text-center"
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
          </div>
          
          <button 
            onClick={handleCheckout}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-shadow hover:shadow-lg"
          >
            Buy Now
          </button>
          
          <Link href="/" className="mt-4 inline-block text-sm text-gray-600 hover:underline">
            ← Back to all products
          </Link>
        </div>
      </div>
    </div>
  );
}
