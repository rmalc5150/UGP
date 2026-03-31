import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-stone-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
          <div className="col-span-3 md:col-span-1">
            <div className="text-xl font-bold tracking-tight mb-2">UGP</div>
            <p className="text-sm text-gray-500">Thoughtfully made essentials for everyday life.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/clothing"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/footwear"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  Footwear
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/accessories"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/account"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/account/orders"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} UGP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
