'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/lib/mock-data';

const cartItems = [
  { product: products[0], qty: 1 },
  { product: products[2], qty: 1 },
];

const subtotal = cartItems.reduce((sum, i) => sum + i.product.price * i.qty, 0);
const total = subtotal;

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 'shipping') {
      setStep('payment');
    } else {
      router.push('/checkout/success');
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/cart"
        className="text-sm text-gray-500 hover:text-black mb-8 inline-block transition-colors"
      >
        ← Back to cart
      </Link>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Form */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-10">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === 'shipping' ? 'bg-black text-white' : 'bg-stone-200 text-gray-600'}`}
            >
              1
            </div>
            <span className="text-sm font-medium">Shipping</span>
            <div className="flex-1 h-px bg-gray-200" />
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === 'payment' ? 'bg-black text-white' : 'bg-stone-200 text-gray-600'}`}
            >
              2
            </div>
            <span className="text-sm font-medium">Payment</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 'shipping' ? (
              <>
                <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="First name"
                    className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    required
                    placeholder="Last name"
                    className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="border border-gray-200 px-3 py-2 text-sm w-full focus:outline-none focus:border-black"
                />
                <input
                  required
                  placeholder="Address"
                  className="border border-gray-200 px-3 py-2 text-sm w-full focus:outline-none focus:border-black"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    required
                    placeholder="City"
                    className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    required
                    placeholder="State"
                    className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    required
                    placeholder="ZIP"
                    className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                </div>
                <div className="pt-2 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3">
                    Shipping Method
                  </p>
                  <label className="flex items-center gap-3 border border-black rounded p-3 cursor-pointer text-sm">
                    <input type="radio" name="shipping" defaultChecked readOnly /> Standard (Free) —
                    5–7 business days
                  </label>
                  <label className="flex items-center gap-3 border border-gray-200 rounded p-3 cursor-pointer text-sm">
                    <input type="radio" name="shipping" readOnly /> Express ($12) — 2–3 business
                    days
                  </label>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-6">Payment</h2>
                <input
                  required
                  placeholder="Name on card"
                  className="border border-gray-200 px-3 py-2 text-sm w-full focus:outline-none focus:border-black"
                />
                <input
                  required
                  placeholder="Card number"
                  className="border border-gray-200 px-3 py-2 text-sm w-full focus:outline-none focus:border-black"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="MM / YY"
                    className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                  <input
                    required
                    placeholder="CVC"
                    className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
                  />
                </div>
              </>
            )}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-stone-800 transition-colors mt-4"
            >
              {step === 'shipping' ? 'Continue to Payment' : `Place Order — $${total}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <div className="bg-stone-50 rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-sm">Order Summary</h3>
            <div className="space-y-3 mb-6">
              {cartItems.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className={`${product.bg} w-12 h-12 rounded shrink-0`} />
                  <div className="flex-1">
                    <p className="text-xs font-medium">{product.name}</p>
                    <p className="text-xs text-gray-400">Qty: {qty}</p>
                  </div>
                  <p className="text-xs font-medium">${product.price}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
