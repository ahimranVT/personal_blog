// app/components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../theme-btn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Imran Academy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:scale-110 hover:font-semibold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:scale-110 hover:font-semibold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 dark:text-gray-300 hover:scale-110 hover:font-semibold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:scale-110 hover:font-semibold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold my-4">
                    Imran Academy
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-6">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/blog">Blog</Link>
                      <Link href="/contact">Contact</Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}

      {/* {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          
        </div>
      )} */}
    </nav>
  );
}
