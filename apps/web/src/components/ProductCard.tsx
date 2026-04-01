import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/mock-data';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square rounded-lg mb-3 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
