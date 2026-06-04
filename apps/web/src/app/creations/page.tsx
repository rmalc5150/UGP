import Link from 'next/link';
import Image from 'next/image';

const designedItems = [
  {
    id: 'boxer-brief-001',
    name: 'Classic Boxer Brief',
    image: '/1.png',
    createdAt: 'May 25, 2026',
    prices: {
      1: 34,
      5: 155,
      10: 290,
    },
    stats: {
      silhouette: 'Boxer Brief',
      fabric: 'Soft cotton stretch',
      color: 'Black',
      waistband: 'Logo waistband',
      fit: 'Athletic fit',
    },
  },
  {
    id: 'tee-001',
    name: 'Lightweight T-Shirt',
    image: '/2.png',
    createdAt: 'May 20, 2026',
    prices: {
      1: 42,
      5: 195,
      10: 370,
    },
    stats: {
      silhouette: 'T-Shirt',
      fabric: 'Lightweight cotton',
      color: 'White',
      neckline: 'Crew neck',
      fit: 'Relaxed fit',
    },
  },
  {
    id: 'brief-001',
    name: 'Minimal Brief',
    image: '/3.png',
    createdAt: 'May 12, 2026',
    prices: {
      1: 28,
      5: 130,
      10: 245,
    },
    stats: {
      silhouette: 'Brief',
      fabric: 'Modal blend',
      color: 'Stone',
      waistband: 'Label-less waistband',
      fit: 'Slim fit',
    },
  },
];

export default function CreatePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">Your Creations</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {designedItems.map((item) => (
          <article key={item.id} className="rounded-2xl overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-xs text-gray-500 mt-1">Created {item.createdAt}</p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm mb-6">
                {Object.entries(item.stats).map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] uppercase tracking-wide text-gray-500">{label}</dt>
                    <dd className="text-gray-300 mt-0.5">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-1">
                <Link
                  href={`/design?edit=${item.id}`}
                  className="block w-full text-center py-1 text-sm font-medium rounded-xl text-white bg-transparent hover:bg-gray-100 hover:text-black transition-colors"
                >
                  Edit
                </Link>
                <Link
                  href={`/cart?design=${item.id}`}
                  className="block w-full bg-gray-100 text-black text-center py-2 text-sm font-medium rounded-xl hover:bg-white transition-colors"
                >
                  Buy 1 - <span>${item.prices[1]}</span>
                </Link>
                <Link
                  href={`/cart?design=${item.id}`}
                  className="block w-full bg-gray-100 text-black text-center py-2 text-sm font-medium rounded-xl hover:bg-white transition-colors"
                >
                  Buy 5 - <span>${item.prices[5]}</span>
                </Link>
                <Link
                  href={`/cart?design=${item.id}`}
                  className="block w-full bg-gray-100 text-black text-center py-2 text-sm font-medium rounded-xl hover:bg-white transition-colors"
                >
                  Buy 10 - <span>${item.prices[10]}</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
