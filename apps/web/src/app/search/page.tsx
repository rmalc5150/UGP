import { products } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q ?? '';
  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()),
      )
    : products;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <form className="mb-10">
        <div className="flex items-center w-full border border-stone-800 rounded-xl overflow-hidden">
          <input
            name="q"
            defaultValue={query}
            placeholder="Search products..."
            className="flex-1 px-4 py-3 text-sm focus:outline-none bg-transparent"
          />
          <button
            type="submit"
            className="px-5 py-3 text-gray-400 hover:bg-stone-800 transition-colors shrink-0"
          >
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>

      {query && (
        <p className="text-sm text-gray-500 mb-6">
          {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
        </p>
      )}

      {results.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">No products found for &ldquo;{query}&rdquo;.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
