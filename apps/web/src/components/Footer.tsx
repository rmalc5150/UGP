import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid lg:grid-cols-3">
          <div className="flex space-x-2">
            <h4 className="font-semibold uppercase tracking-widest text-white">Create</h4>

            <Link
              href="/categories/all"
              className="text-gray-500 hover:text-white transition-colors"
            >
              All
            </Link>

            <Link
              href="/categories/underwear"
              className="text-gray-500 hover:text-white transition-colors"
            >
              underwear
            </Link>

            <Link
              href="/categories/accessories"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Accessories
            </Link>
          </div>
          <div className="flex space-x-2">
            <h4 className="font-semibold uppercase tracking-widest text-white">Account</h4>

            <Link href="/account" className="text-gray-500 hover:text-white transition-colors">
              Profile
            </Link>

            <Link
              href="/account/orders"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Orders
            </Link>

            <Link href="/cart" className="text-gray-500 hover:text-white transition-colors">
              Cart
            </Link>

            <Link href="/wishlist" className="text-gray-500 hover:text-white transition-colors">
              Wishlist
            </Link>
          </div>
          <div className="flex space-x-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
              Help
            </h4>

            <Link href="/contact" className="text-gray-500 hover:text-white transition-colors">
              Contact
            </Link>

            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
        <div className="mt-2 ">
          <p className="text-xs text-gray-600 text-right">
            &copy; {new Date().getFullYear()} UGP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
