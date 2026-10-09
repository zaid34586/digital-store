
import Image from 'next/image';

export default function ProductCard({ title, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow group">
      <Image 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
        width={800}
        height={480}
      />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{price}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">View details</span>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
