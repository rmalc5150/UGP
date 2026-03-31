import Image from 'next/image';
import { products } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        {/* Images */}
        <div className="flex flex-col gap-3">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
            <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
              >
                <Image src={img} alt={`${product.name} ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400 text-sm">
              {'★'.repeat(Math.round(product.rating))}
            </span>
            <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">{product.description}</p>

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3">Size</p>
            <div className="flex gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
                <button
                  key={s}
                  className="border border-gray-200 px-3 py-1.5 text-sm hover:border-black transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-auto">
            <button className="flex-1 bg-black text-white py-3 text-sm font-medium hover:bg-stone-800 transition-colors">
              Add to Cart
            </button>
            <button className="border border-gray-200 px-4 py-3 hover:border-black transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
