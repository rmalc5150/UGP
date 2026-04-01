import { products, categories } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.category === slug);

  return (
    <div>
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">{category.name}</h1>
          <p className="text-gray-500 mt-2 text-sm">{categoryProducts.length} items</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryProducts.length === 0 ? (
          <p className="text-gray-500">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
