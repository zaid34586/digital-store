
import Link from 'next/link';

export default function Products() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/products/course-1" className="group">
          <ProductCard 
            title="Complete Web Development Course" 
            price="₹2,999" 
            image="/images/course1.jpg" 
          />
        </Link>
        <Link href="/products/ebook-1" className="group">
          <ProductCard 
            title="Ultimate Guide to Digital Marketing" 
            price="₹499" 
            image="/images/ebook1.jpg" 
          />
        </Link>
        <Link href="/products/template-1" className="group">
          <ProductCard 
            title="Notion Template Bundle" 
            price="₹799" 
            image="/images/template1.jpg" 
          />
        </Link>
      </div>
    </main>
  );
}
