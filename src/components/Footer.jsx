import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-blue-400 text-black py-8 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold mb-2">E Cart</h2>
          <p className="text-sm">
            Designed and built with all the love in the world by the E Cart team with the help of our contributors.
          </p>
          <p className="text-xs mt-2">
            Code licensed <span className="underline">MIT</span>, docs CC BY 3.0
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Landing Page</a></li>
            <li><a href="#" className="hover:underline">Home Page</a></li>
            <li><a href="#" className="hover:underline">History Page</a></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Guides</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">React</a></li>
            <li><a href="#" className="hover:underline">React Bootstrap</a></li>
            <li><a href="#" className="hover:underline">React Router</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded text-gray-900"
          />
          <div className="flex space-x-3 mt-3">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-phone"></i></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-black-300">
        &copy; May 2024 Batch, Media Player. Built with ❤️.
      </div>
    </footer>
  );
};

export default Footer;
