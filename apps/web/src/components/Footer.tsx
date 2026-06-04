import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 text-xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between">
        <div className="flex space-x-2">
          <Link href="/aboutUs" className="text-gray-500 hover:text-white transition-colors">
            About Us
          </Link>

          <Link href="/contact" className="text-gray-500 hover:text-white transition-colors">
            Contact Us
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
            Privacy
          </Link>
        </div>

        <div className="">
          <p className="text-xs text-gray-600 text-right">
            &copy; {new Date().getFullYear()} UGP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
