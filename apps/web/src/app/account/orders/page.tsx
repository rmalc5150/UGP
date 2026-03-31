import Link from 'next/link';
import { orders } from '@/lib/mock-data';

export default function OrdersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8 text-sm text-gray-500">
        <Link href="/account" className="hover:text-black transition-colors">
          Account
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-black">Orders</span>
      </div>

      <h1 className="text-3xl font-bold mb-10">Your Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-6">No orders yet.</p>
          <Link
            href="/products"
            className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Link
              key={order.id}
              href={`/account/orders/${order.id}`}
              className="flex items-center justify-between border border-gray-100 rounded-lg p-5 hover:border-gray-300 transition-colors"
            >
              <div>
                <p className="font-medium text-sm">{order.id}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {order.date} · {order.items} {order.items === 1 ? 'item' : 'items'}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : order.status === 'In Transit'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {order.status}
                </span>
                <span className="text-sm font-semibold">${order.total}</span>
                <span className="text-gray-300 text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
