import React from 'react';

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start px-4">
            <div className="flex-1 min-w-[200px] m-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">My Store</h3>
                <p className="text-gray-300">Your one-stop shop for everything you love.</p>
            </div>
            <div className="flex-1 min-w-[150px] m-4">
                <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                <ul className="list-none p-0 leading-8">
                    <li>
                        <a href="/shop" className="text-white hover:text-yellow-400 transition">Shop</a>
                    </li>
                    <li>
                        <a href="/about" className="text-white hover:text-yellow-400 transition">About Us</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:text-yellow-400 transition">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex-1 min-w-[200px] m-4">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="text-2xl flex space-x-4">
                    <a href="https://facebook.com" className="hover:text-yellow-400 transition" aria-label="Facebook">🌐</a>
                    <a href="https://twitter.com" className="hover:text-yellow-400 transition" aria-label="Twitter">🐦</a>
                    <a href="https://instagram.com" className="hover:text-yellow-400 transition" aria-label="Instagram">📸</a>
                </div>
            </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} My Store. All rights reserved.
        </p>
    </footer>
);

export default Footer;