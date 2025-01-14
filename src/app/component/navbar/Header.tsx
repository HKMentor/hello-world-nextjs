"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-slate-700 h-12 sticky top-0 z-50">
      <div className="font-bold text-white flex justify-between items-center px-4">
        <h1 className="text-xl hover:text-red-700 mt-3">Hello World</h1>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-blue-500 hover:text-red-500 transition duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
        <ul className="hidden md:flex gap-3 text-white">
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link href="/education" className="hover:text-blue-600">Education</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-700 absolute w-full z-50">
          <ul className="flex flex-col gap-3 p-4">
            <li className="text-white font-bold">
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li className="text-white font-bold">
              <Link href="/about" className="hover:text-blue-600">About</Link>
            </li>
            <li className="text-white font-bold">
              <Link href="/education" className="hover:text-blue-600">Education</Link>
            </li>
            <li className="text-white font-bold">
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
