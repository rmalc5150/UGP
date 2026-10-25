import Logo from '@/components/Logo';

export default function Home() {
  return (
    <section
      className="flex min-h-svh flex-col bg-white bg-cover bg-center bg-no-repeat text-center text-stone-900"
      style={{
        backgroundImage:
          "linear-gradient(rgb(255 255 255 / 50%), rgb(255 255 255 / 50%)), url('/Risograph-Grid.png')",
      }}
    >
      <header className="sticky top-0 z-10 w-full px-6 py-3 bg-black text-white">
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">We&apos;re months away.</h1>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <Logo width={480} height={182} className="h-auto w-full max-w-sm sm:max-w-md" />
      </div>
      <footer className="sticky bottom-0 z-10 flex w-full items-center justify-between gap-4 bg-black px-6 py-0 text-white">
        <a
          href="mailto:support@untitledgarmentproject.com"
          aria-label="Email support@untitledgarmentproject.com"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>
        <p className="text-right text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Untitled Garment Project. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
