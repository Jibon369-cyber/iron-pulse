
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-[#273043] px-6 py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row md:gap-6">
        {/* Hero Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-[#F9FAFB] sm:text-5xl lg:text-6xl">
            Train Hard. Fight Smart.
          </h1>

          <p className="mb-6 text-lg font-medium text-[#F9FAFB] sm:text-xl">
            Build strength, discipline & confidence.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              className="w-full rounded-md bg-[#DC2626] px-4 py-3 text-center text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C] sm:w-auto"
              href="/membership"
            >
              Start Training
            </Link>

            <Link
              className="w-full rounded-md bg-[#DC2626] px-4 py-3 text-center text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C] sm:w-auto"
              href="/programs"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/hero-img.png"
            width={550}
            height={500}
            alt="IronPulse training"
            className="mx-auto h-auto w-full max-w-md object-contain md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

