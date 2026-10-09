
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Digital Store
              </Link>
            </div>
            <div className="hidden md:flex">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="px-3 pt-2 border-b-2 border-transparent hover:border-indigo-500 text-sm font-medium text-gray-500 hover:text-gray-800">
                  Home
                </Link>
                <Link href="/products" className="px-3 pt-2 border-b-2 border-transparent hover:border-indigo-500 text-sm font-medium text-gray-500 hover:text-gray-800">
                  Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="py-12">{children}</main>
    </div>
  );
}
