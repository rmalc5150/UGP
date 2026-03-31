import Link from 'next/link';
import { products } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';

const wishlistItems = [products[4], products[6]];

export default function WishlistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Wishlist</h1>
      <p className="text-sm text-gray-500 mb-10">{wishlistItems.length} saved items</p>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-gray-500 mb-6">Your wishlist is empty.</p>
          <Link
            href="/products"
            className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlistItems.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
