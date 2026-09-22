
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                width={90}
                height={90}
                alt="IronPulse logo"
              />
            </Link>

            <p className="mt-4 max-w-xs leading-7 text-gray-400">
              Build strength, develop discipline, and become the strongest
              version of yourself with IronPulse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-bold">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-[#DC2626]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[#DC2626]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/programs"
                  className="transition hover:text-[#DC2626]"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/trainers"
                  className="transition hover:text-[#DC2626]"
                >
                  Trainers
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-5 text-xl font-bold">Programs</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/programs/gym"
                  className="transition hover:text-[#DC2626]"
                >
                  Gym Training
                </Link>
              </li>

              <li>
                <Link
                  href="/programs/martial-arts"
                  className="transition hover:text-[#DC2626]"
                >
                  Martial Arts
                </Link>
              </li>

              <li>
                <Link
                  href="/programs/personal-training"
                  className="transition hover:text-[#DC2626]"
                >
                  Personal Training
                </Link>
              </li>

              <li>
                <Link
                  href="/membership"
                  className="transition hover:text-[#DC2626]"
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-bold">Contact Us</h3>

            <ul className="space-y-3 text-gray-400">
              <li>📍 Chattogram, Bangladesh</li>
              <li>📞 +880 1234-567890</li>
              <li>✉️ info@ironpulse.com</li>
              <li>🕒 Mon - Sat: 6 AM - 10 PM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-gray-400 md:px-12 lg:px-20">
          © {new Date().getFullYear()} IronPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

