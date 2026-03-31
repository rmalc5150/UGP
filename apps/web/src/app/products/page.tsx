import { products, categories } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">All Products</h1>
      <p className="text-sm text-gray-500 mb-10">{products.length} items</p>

      <div className="flex gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-48 shrink-0">
          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">Category</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm font-medium">All</button>
              </li>
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <button className="text-sm text-gray-500 hover:text-black transition-colors">
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">Price</h3>
            <ul className="space-y-2">
              {['Under $50', '$50 – $100', '$100 – $150', '$150+'].map((r) => (
                <li key={r}>
                  <button className="text-sm text-gray-500 hover:text-black transition-colors">
                    {r}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">Sort</h3>
            <ul className="space-y-2">
              {['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'].map((s) => (
                <li key={s}>
                  <button className="text-sm text-gray-500 hover:text-black transition-colors">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
