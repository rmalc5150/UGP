import Link from 'next/link';
import { products, orders } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = orders.find((o) => o.id === id);
  if (!order) notFound();

  const orderProducts = products.slice(0, order.items);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8 text-sm text-gray-500">
        <Link href="/account" className="hover:text-black transition-colors">
          Account
        </Link>
        <span className="text-gray-300">/</span>
        <Link href="/account/orders" className="hover:text-black transition-colors">
          Orders
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-black">{order.id}</span>
      </div>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">{order.id}</h1>
          <p className="text-sm text-gray-400 mt-1">Placed on {order.date}</p>
        </div>
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            order.status === 'Delivered'
              ? 'bg-green-100 text-green-700'
              : order.status === 'In Transit'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="border border-gray-100 rounded-lg overflow-hidden mb-6">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold">Items</h2>
        </div>
        {orderProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 px-5 py-4 border-b border-gray-50 last:border-0"
          >
            <div className={`${product.bg} w-16 h-16 rounded shrink-0`} />
            <div className="flex-1">
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-xs text-gray-400 mt-1">Qty: 1</p>
            </div>
            <p className="text-sm font-medium">${product.price}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-100 rounded-lg p-5">
          <h2 className="text-sm font-semibold mb-3">Shipping Address</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Alex Johnson
            <br />
            123 Main St
            <br />
            New York, NY 10001
            <br />
            United States
          </p>
        </div>
        <div className="border border-gray-100 rounded-lg p-5">
          <h2 className="text-sm font-semibold mb-3">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>${order.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>${order.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
