import Link from 'next/link';

export default function OrderSuccessPage() {
  const orderNumber = 'ORD-1004';

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-green-600"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-3">Order Confirmed!</h1>
      <p className="text-gray-500 mb-2 text-sm">Thank you for your purchase.</p>
      <p className="text-sm text-gray-400 mb-10">
        Order <span className="font-medium text-black">{orderNumber}</span> — A confirmation email
        is on its way.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/account/orders"
          className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
        >
          View Order
        </Link>
        <Link
          href="/products"
          className="border border-gray-200 px-8 py-3 text-sm font-medium hover:border-black transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
