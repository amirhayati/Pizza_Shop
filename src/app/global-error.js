'use client'

import Link from 'next/link';

const Error = () => {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        w-screen
        h-screen
        bg-gradient-to-r
        from-red-500 
        to-orange-500
      "
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold bg-gradient-to-r bg-clip-text text-transparent from-red-500 to-orange-500 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            href="/home"
            className="px-6 py-2 text-sm font-semibold from-red-500 bg-blue-50"
          >
              Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;