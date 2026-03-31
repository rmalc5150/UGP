import Link from 'next/link';
import { Product } from '@/lib/mock-data';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div
          className={`${product.bg} aspect-square rounded-lg mb-3 flex items-end justify-end p-3 group-hover:opacity-90 transition-opacity`}
        >
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
            {product.category}
          </span>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
