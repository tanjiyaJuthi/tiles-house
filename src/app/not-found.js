import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 text-mist-800">
      <div className="text-center max-w-md w-full">

        {/* 404 */}
        <h1 className="text-7xl font-bold">404</h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-semibold">
          Page not found
        </h2>

        {/* Message */}
        <p className="mt-2 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-rose-800 text-white hover:bg-gray-800 transition"
          >
            Go Home
          </Link>

          <Link
            href="/all-tiles"
            className="px-5 py-2.5 border border-gray-300 hover:bg-gray-100 transition"
          >
            Browse Tiles
          </Link>
        </div>
      </div>
    </div>
  );
}