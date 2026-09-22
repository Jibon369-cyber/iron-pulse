
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const list = (
    <>
      <li>
        <Link
          onClick={closeMenu}
          className="rounded-sm px-3 py-2 hover:bg-[#B91C1C]"
          href="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          onClick={closeMenu}
          className="rounded-sm px-3 py-2 hover:bg-[#B91C1C]"
          href="/about"
        >
          About
        </Link>
      </li>

      <li>
        <Link
          onClick={closeMenu}
          className="rounded-sm px-3 py-2 hover:bg-[#B91C1C]"
          href="/programs"
        >
          Programs
        </Link>
      </li>

      <li>
        <Link
          onClick={closeMenu}
          className="rounded-sm px-3 py-2 hover:bg-[#B91C1C]"
          href="/trainers"
        >
          Trainers
        </Link>
      </li>

      <li>
        <Link
          onClick={closeMenu}
          className="rounded-sm px-3 py-2 hover:bg-[#B91C1C]"
          href="/schedule"
        >
          Schedule
        </Link>
      </li>

      <li>
        <Link
          onClick={closeMenu}
          className="rounded-sm px-3 py-2 hover:bg-[#B91C1C]"
          href="/membership"
        >
          Membership
        </Link>
      </li>

      <li>
        <Link
          onClick={closeMenu}
          className="rounded-sm px-3 py-2 hover:bg-[#B91C1C]"
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="relative z-50 w-full bg-[#111827] text-[#F9FAFB]">
      {/* Main Navbar */}
      <div className="flex h-20 items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo.png"
            width={90}
            height={90}
            alt="IronPulse logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-2">
            {list}
          </ul>
        </div>

        {/* Desktop Join Button */}
        <Link
          href="/membership"
          className="hidden rounded-md bg-[#DC2626] px-3 py-2 font-bold hover:bg-[#B91C1C] md:block"
        >
          Join Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-20 w-full border-t border-gray-700 bg-[#111827] md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
            {list}

            <li>
              <Link
                onClick={closeMenu}
                href="/membership"
                className="inline-block rounded-md bg-[#DC2626] px-5 py-2 font-bold hover:bg-[#B91C1C]"
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

