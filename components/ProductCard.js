
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  // Use SVG extension for placeholder images
  const imageSrc = product.image.replace('.jpg', '.svg');

  return (
    <Link 
      href={`/products/${product.id}`}
      className="group block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={imageSrc}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-bold rounded-full shadow-lg">
            {product.badge}
          </span>
        )}
        
        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
            -{discount}%
          </span>
        )}
        
        {/* Category Tag */}
        <span className="absolute bottom-3 left-3 px-2 py-1 bg-black/70 backdrop-blur text-white text-xs font-medium rounded-full">
          {product.category}
        </span>
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-full transform group-hover:scale-105 transition-transform">
            Quick View
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Title & Rating */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">{product.rating}</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-500">({product.reviews.toLocaleString()})</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
          {product.description}
        </p>
        
        {/* Delivery Method */}
        <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-3 py-2 rounded-full w-fit">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>{product.delivery}</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-slate-400 dark:text-slate-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        
        {/* CTA Button */}
        <div className="pt-2">
          <span className="w-full block px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl text-center hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg shadow-primary-500/25 group-hover:scale-[1.02] transition-transform">
            Buy Now →
          </span>
        </div>
      </div>
    </Link>
  );
}
