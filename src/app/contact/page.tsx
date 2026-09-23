
"use client";

import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#273043] px-6 py-20 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-semibold uppercase tracking-widest text-[#DC2626]">
            Get In Touch
          </p>

          <h1 className="mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Have questions about our programs or membership? Get in touch with
            the IronPulse team and we&apos;ll be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl bg-[#111827] p-8 shadow-xl md:p-10">
            <p className="mb-3 font-semibold uppercase tracking-widest text-[#DC2626]">
              Contact Information
            </p>

            <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              Let&apos;s Talk
            </h2>

            <p className="mb-8 max-w-lg text-lg leading-8 text-gray-300">
              Whether you have questions about our programs, membership, or
              training schedule, we&apos;re here to help.
            </p>

            <div className="space-y-6">
              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#DC2626]">
                  Location
                </p>
                <p className="text-lg text-gray-300">
                  📍 Chattogram, Bangladesh
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#DC2626]">
                  Phone
                </p>
                <p className="text-lg text-gray-300">
                  📞 +880 1234-567890
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#DC2626]">
                  Email
                </p>
                <p className="text-lg text-gray-300">
                  ✉️ info@ironpulse.com
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#DC2626]">
                  Opening Hours
                </p>
                <p className="text-lg text-gray-300">
                  🕒 Mon - Sat: 6 AM - 10 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-[#111827] p-8 shadow-xl md:p-10">
            <p className="mb-3 font-semibold uppercase tracking-widest text-[#DC2626]">
              Send a Message
            </p>

            <h2 className="mb-8 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-[#F9FAFB]"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-md border border-gray-700 bg-[#273043] px-4 py-3 text-[#F9FAFB] outline-none transition placeholder:text-gray-500 focus:border-[#DC2626]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-[#F9FAFB]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-md border border-gray-700 bg-[#273043] px-4 py-3 text-[#F9FAFB] outline-none transition placeholder:text-gray-500 focus:border-[#DC2626]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-semibold text-[#F9FAFB]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-md border border-gray-700 bg-[#273043] px-4 py-3 text-[#F9FAFB] outline-none transition placeholder:text-gray-500 focus:border-[#DC2626]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-[#F9FAFB]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-md border border-gray-700 bg-[#273043] px-4 py-3 text-[#F9FAFB] outline-none transition placeholder:text-gray-500 focus:border-[#DC2626]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#DC2626] px-6 py-3 text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <p className="rounded-md bg-green-900/30 px-4 py-3 text-center font-medium text-green-400">
                  Your message has been submitted successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#273043] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12">
          <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl">
            Ready to Start Your Journey?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300">
            Join IronPulse today and take the first step toward becoming
            stronger, healthier, and more disciplined.
          </p>

          <Link
            href="/membership"
            className="inline-block rounded-md bg-[#DC2626] px-7 py-3 text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]"
          >
            View Membership Plans
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;

