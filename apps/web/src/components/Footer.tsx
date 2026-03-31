import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
          <div className="col-span-3 md:col-span-1">
            <Logo className="h-4 w-auto invert mb-4" />
            <p className="text-sm text-gray-500">Thoughtfully made essentials for everyday life.</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
              Create
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/clothing"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/footwear"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  underwear
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/accessories"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
              Account
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/account"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Mine
                </Link>
              </li>
              <li>
                <Link
                  href="/account/orders"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
              Help
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  How
                </Link>
              </li>
              <li>
                <Link
                  href="/why"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Why
                </Link>
              </li>
              <li>
                <Link
                  href="/measure"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Measure
                </Link>
              </li>
              <li>
                <Link
                  href="/create"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} UGP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
