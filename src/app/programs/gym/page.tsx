
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gym = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#273043] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-widest text-[#DC2626]">
              IronPulse Training
            </p>

            <h1 className="mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl">
              Gym Training
            </h1>

            <p className="max-w-xl text-lg leading-8 text-gray-300 md:text-xl">
              Build strength, improve endurance, and achieve your fitness
              goals with structured gym training at IronPulse.
            </p>

            <Link
              href="/membership"
              className="mt-8 inline-block rounded-md bg-[#DC2626] px-6 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]"
            >
              Join IronPulse
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/gym-training.jpg"
              width={600}
              height={450}
              alt="Gym training at IronPulse"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Strength Training */}
      <section className="bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-[#111827] p-8 shadow-xl md:p-12">
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#DC2626]">
              Build Strength
            </p>

            <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              Strength Training
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-gray-300">
              Develop muscular strength with structured exercises designed for
              different fitness levels. Our training focuses on proper form,
              progressive improvement, and consistent performance.
            </p>
          </div>
        </div>
      </section>

      {/* Fitness & Conditioning */}
      <section className="bg-[#273043] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-gray-700 bg-[#111827] p-8 shadow-xl md:p-12">
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#DC2626]">
              Improve Performance
            </p>

            <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              Fitness & Conditioning
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-gray-300">
              Improve your stamina, endurance, mobility, and overall physical
              fitness through effective conditioning exercises and training
              routines.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-[#111827] p-8 shadow-xl md:p-12">
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#DC2626]">
              Training Benefits
            </p>

            <h2 className="mb-8 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              What You’ll Get
            </h2>

            <ul className="grid gap-4 md:grid-cols-2">
              <li className="rounded-lg bg-[#273043] p-4 text-gray-300">
                ✓ Strength and muscle development
              </li>

              <li className="rounded-lg bg-[#273043] p-4 text-gray-300">
                ✓ Improved endurance and fitness
              </li>

              <li className="rounded-lg bg-[#273043] p-4 text-gray-300">
                ✓ Professional trainer guidance
              </li>

              <li className="rounded-lg bg-[#273043] p-4 text-gray-300">
                ✓ Structured training programs
              </li>

              <li className="rounded-lg bg-[#273043] p-4 text-gray-300 md:col-span-2">
                ✓ A motivating training environment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#273043] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12">
          <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl">
            Ready to Start Your Training Journey?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300">
            Join IronPulse today and start building strength, fitness, and
            confidence.
          </p>

          <Link
            href="/membership"
            className="inline-block rounded-md bg-[#DC2626] px-7 py-3 text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]"
          >
            Join IronPulse
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Gym;

