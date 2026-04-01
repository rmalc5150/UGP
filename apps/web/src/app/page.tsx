import Link from 'next/link';
import { products, categories } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Categories */}
      {/*<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="group">
              <div
                className={`${cat.bg} rounded-lg aspect-video flex items-center justify-center group-hover:opacity-90 transition-opacity mb-3`}
              >
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {cat.name}
                </span>
              </div>
              <p className="text-sm font-medium">{cat.name}</p>
              <p className="text-xs text-gray-500">{cat.count} items</p>
            </Link>
          ))}
        </div>
      </section>
        /*}
      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">We</h2>
          <Link
            href="/products"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            View all past designs →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold mb-3">The Loop</h2>
          <p className="text-gray-500 mb-8 text-sm">Exclusive offers</p>
          <form className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-stone-800 px-4 py-2 text-sm focus:outline-none focus:border-stone-700 rounded-full bg-transparent"
            />
            <button className="bg-black text-stone-400 px-6 py-2 text-sm font-medium hover:text-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
