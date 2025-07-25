'use client'
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { ShoppingBag } from 'lucide-react';
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(1);
    // Function to toggle the mobile menu and manage page scroll
    // This function will disable page scroll when the mobile menu is open
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            disablePageScroll();
        } else {
            enablePageScroll();
        }
    };
    // Effect to enable page scroll when the component unmounts
    // This ensures that when the Navbar is removed from the DOM, page scroll is re-enabled
    useEffect(() => {
        return () => {
            enablePageScroll();
        };
    }, []);

    // Render the Navbar component
    // The Navbar includes links to different pages and icons for shopping bag and user profile
    // The mobile menu is toggled by clicking the hamburger icon
    // The Navbar is styled with Tailwind CSS classes for a clean and responsive design
    // The links are wrapped in Next.js Link components for client-side navigation
    // The icons are imported from the lucide-react library for a modern look
    return (
        <nav className="bg-white0 shadow-xl">
            <div className="flex">
                <div className="px-4 items-center flex justify-between md:w-auto">
                <span>
                <Link href="/" className="md:text-xl text-1xl lg:text-2xl 2xl:text-3xl font-bold text-black hover:text-gray-700">
                    My Store
                </Link>
                </span>
                </div>
                <div className="px-8 hidden md:flex items-center justify-between md:w-auto">
                <ol className="flex space-x-6 font-semibold text-sm lg:text-lg xl:text-lg 2xl:text-xl xl:space-x-10">
                    <li>
                        <Link href="/" className="text-black hover:text-gray-700">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-black hover:text-gray-700">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-black hover:text-gray-700">Contact</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-black hover:text-gray-700">Blog</Link>
                    </li>
                </ol>
                </div>
                <div className="py-4 px-2 hidden md:flex md:ml-auto justify-between items-center md:w-auto">
                    <Button className="w-full text-sm px-6 py-2 md:text-xs lg:text-sm xl:text-md 2xl:text-lg">
                        <Link href="/login" className="text-white">Login</Link>
                    </Button>
                </div>
                <div className="py-5 px-2 ml-auto md:ml-0">
                    <Link href="/profile" className="text-black hover:text-gray-700">
                    {/* Cart item count badge */}
                        {cartItemCount > 0 && (
                            <span className="absolute top-1 m-2.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                                {cartItemCount > 99 ? '99+' : cartItemCount}
                            </span>
                        )}
                        <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 2xl:h-8 2xl:w-8 inline-block" />
                    </Link>
                </div>
                <div className="py-5 px-2">
                    <Link href="/profile" className="text-black hover:text-gray-700">
                        <CircleUserRound className="w-5 h-5 md:w-6 md:h-6 2xl:h-8 2xl:w-8 inline-block" />
                    </Link>
                </div>
                <div className="mt-5.5 px-2 md:hidden">
                <button
                    onClick={toggleMobileMenu}
                    className="text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                    <Menu className="w-5 h-6" />
                </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden flex">
                {isMobileMenuOpen && (
                    <div className="fixed bg-white inset-0 w-6/7 ml-auto shadow-lg z-50 transition-transform duration-300 ease-in-out" style={{ transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                        <div className="flex justify-end p-3 mt-2">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-black hover:text-gray-900 focus:outline-none"
                            >
                                <X className="w-5 h-6" />
                            </button>
                        </div>
                        <ol className="flex flex-col space-y-6 p-4 items-center">
                            <li className="border-b border-gray-300 w-full text-center hover:border-none">
                                <Link href="/" className="text-black hover:text-gray-700">Home</Link>
                            </li>
                            <li className="border-b border-gray-300 w-full text-center">
                                <Link href="/about" className="text-black hover:text-gray-700">About</Link>
                            </li>
                            <li className="border-b border-gray-300 w-full text-center">
                                <Link href="/contact" className="text-black hover:text-gray-700">Contact</Link>
                            </li>
                            <li className="border-b border-gray-300 w-full text-center">
                                <Link href="/blog" className="text-black hover:text-gray-700">Blog</Link>
                            </li>
                        </ol>
                        <div className="py-2 px-4 md:hidden justify-center">
                    <Button className="w-full px-4 py-2">
                        <Link href="/login" className="text-white">Login</Link>
                    </Button>
                </div>
                    </div>
                )}
            </div>
            {/* End of Mobile Menu */}
        {/* Overlay to prevent scrolling when the mobile menu is open */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </nav>
    )
}