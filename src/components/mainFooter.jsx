export default function MainFooter() {
  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-purple-600"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="text-xl font-bold">Financio</span>
            </div>
          </div>

          {/* Pages Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home v1
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Company v1
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Other templates
                </a>
              </li>
            </ul>
          </div>

          {/* Blog/Contact Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 opacity-0">Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Blog v1
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* CMS Pages Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">CMS Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Blog Post
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Blog Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Team Members
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Pricing Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Pricing Single
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers Single
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Pages Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Utility Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  404
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Password
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="mb-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing you agree to with our{" "}
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Privacy Policy
              </a>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © Financio by Minimal Square. Powered by Webflow.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.41 16.38C6.13 16.89 6.99 17.17 7.89 17.17C6.37 18.38 4.49 19.03 2.56 19C2.22 19 1.88 18.98 1.54 18.93C3.44 20.15 5.7 20.85 8 20.85C16 20.85 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.9 8.7 6.3 8.1 6.3 7.3C6.3 6.5 6.9 5.9 7.7 5.9C8.5 5.9 9.1 6.5 9.1 7.3C9.1 8.1 8.5 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.8 12 14 12C13.2 12 12.5 12.7 12.5 13.5V17H10V10H12.5V11.3C12.9 10.5 13.8 10 15 10C16.7 10 18 11.3 18 13V17Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
