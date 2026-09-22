
import React from "react";

import Link from "next/link";
import ProgramCard from "../components/ProgramCard";

const programs = [
  {
    name: "Gym Training",
    description:
      "Build strength, increase endurance, and improve your overall fitness with structured gym training.",
    image: "/gym-training.jpg",
    link: "/programs/gym",
  },
  {
    name: "Martial Arts",
    description:
      "Develop discipline, confidence, and combat skills through professional martial arts training.",
    image: "/martial-arts.jpg",
    link: "/programs/martialArt",
  },
  {
    name: "Personal Training",
    description:
      "Get personalized guidance and training plans designed around your individual fitness goals.",
    image: "/personal-training.jpg",
    link: "/programs/personal-training",
  },
];

const Page = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#273043] px-6 py-24 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-semibold uppercase tracking-widest text-[#DC2626]">
            Train With IronPulse
          </p>

          <h1 className="mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl">
            Our Training Programs
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Choose the training program that matches your goals and start
            building strength, confidence, discipline, and a healthier
            lifestyle.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#DC2626]">
              Find Your Program
            </p>

            <h2 className="mb-4 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              Choose Your Training
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Whether you want to build strength, learn martial arts, or work
              with a personal trainer, IronPulse has a program for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard
                key={program.name}
                name={program.name}
                description={program.description}
                image={program.image}
                link={program.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#273043] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12">
          <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl">
            Ready to Start Training?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300">
            Choose your program and take the first step toward becoming
            stronger, healthier, and more disciplined.
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

export default Page;

