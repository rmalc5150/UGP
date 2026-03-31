import Link from 'next/link';
import { products } from '@/lib/mock-data';

const cartItems = [
  { product: products[0], qty: 1, size: 'M' },
  { product: products[2], qty: 1, size: '42' },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-gray-500 mb-6">Your cart is empty.</p>
          <Link
            href="/products"
            className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-12">
          {/* Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map(({ product, qty, size }) => (
              <div key={product.id} className="flex gap-4 pb-6 border-b border-gray-100">
                <div className={`${product.bg} w-24 h-24 rounded-lg shrink-0`} />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-400 mt-1">Size: {size}</p>
                    </div>
                    <button className="text-xs text-gray-400 hover:text-black transition-colors">
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-gray-200">
                      <button className="px-3 py-1 text-sm hover:bg-gray-50">−</button>
                      <span className="px-4 py-1 text-sm border-x border-gray-200">{qty}</span>
                      <button className="px-3 py-1 text-sm hover:bg-gray-50">+</button>
                    </div>
                    <p className="text-sm font-medium">${product.price * qty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-stone-50 rounded-lg p-6 h-fit">
            <h2 className="font-semibold mb-4 text-sm">Order Summary</h2>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full bg-black text-white text-center py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Checkout
            </Link>
            <Link
              href="/products"
              className="block w-full text-center text-sm text-gray-500 mt-3 hover:text-black transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
