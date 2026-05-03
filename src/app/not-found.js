import Link from 'next/link';
import { headers } from 'next/headers';
import { getSiteData } from '@/lib/helper/utils';
 
export default async function NotFound() {
    const headersList = await headers();
    const domain = headersList.get('host');
    const data = await getSiteData(domain);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md">
                
                {/* 404 Code */}
                <h1 className="text-7xl font-bold text-gray-900">404</h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page not found
                </h2>

                {/* Description */}
                <p className="mt-2 text-gray-600">
                    The page you’re looking for doesn’t exist on{' '}
                    <span className="font-medium text-gray-800">
                        {data?.name || domain}
                    </span>.
                </p>

                {/* Actions */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="px-5 py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/all-tiles"
                        className="px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Browse Tiles
                    </Link>
                </div>
            </div>
        </div>
    )
}