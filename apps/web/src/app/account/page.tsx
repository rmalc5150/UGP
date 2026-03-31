import Link from 'next/link';
import { orders } from '@/lib/mock-data';

export default function AccountPage() {
  const recentOrders = orders.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back, Alex</p>
        </div>
        <Link
          href="/auth/sign-in"
          className="text-sm text-gray-400 hover:text-black transition-colors"
        >
          Sign out
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          { label: 'Orders', href: '/account/orders', description: `${orders.length} orders` },
          { label: 'Wishlist', href: '/wishlist', description: 'Saved items' },
          { label: 'Settings', href: '#', description: 'Profile & preferences' },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="border border-gray-100 rounded-lg p-6 hover:border-gray-300 transition-colors"
          >
            <p className="font-semibold text-sm mb-1">{item.label}</p>
            <p className="text-xs text-gray-400">{item.description}</p>
          </Link>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Recent Orders</h2>
          <Link
            href="/account/orders"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <Link
              key={order.id}
              href={`/account/orders/${order.id}`}
              className="flex items-center justify-between border border-gray-100 rounded-lg p-4 hover:border-gray-300 transition-colors"
            >
              <div>
                <p className="text-sm font-medium">{order.id}</p>
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
                <span className="text-sm font-medium">${order.total}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
