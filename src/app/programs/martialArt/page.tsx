
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MartialArt = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2'>
          <div>
            <p className='mb-3 font-semibold uppercase tracking-widest text-[#DC2626]'>
              IronPulse Training
            </p>

            <h1 className='mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl'>
              Martial Arts Training
            </h1>

            <p className='max-w-xl text-lg leading-8 text-gray-300 md:text-xl'>
              Build discipline, confidence, strength, and practical combat
              skills through professional martial arts training at IronPulse.
            </p>

            <Link
              href='/membership'
              className='mt-8 inline-block rounded-md bg-[#DC2626] px-6 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
              Join IronPulse
            </Link>
          </div>

          <div className='overflow-hidden rounded-2xl shadow-2xl'>
            <Image
              src='/martial-arts.jpg'
              width={600}
              height={450}
              alt='Martial arts training at IronPulse'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* Discipline & Mindset */}
      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-2xl bg-[#111827] p-8 shadow-xl md:p-12'>
            <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
              Build Your Mindset
            </p>

            <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
              Discipline & Mindset
            </h2>

            <p className='max-w-3xl text-lg leading-8 text-gray-300'>
              Martial arts is not only about fighting. It teaches discipline,
              patience, focus, and mental strength that can help you in everyday
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Combat Training */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2'>
          <div>
            <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
              Develop Your Skills
            </p>

            <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
              Combat Training
            </h2>

            <p className='max-w-xl text-lg leading-8 text-gray-300'>
              Learn fundamental striking, movement, defense, and combat
              techniques through structured training suitable for different
              experience levels.
            </p>
          </div>

          <div className='overflow-hidden rounded-2xl shadow-2xl'>
            <Image
              src='/combat.jpg'
              width={600}
              height={400}
              alt='Combat training at IronPulse'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* Choose Your Style */}
      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-5xl'>
          <div className='mb-10 text-center'>
            <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
              Find Your Discipline
            </p>

            <h2 className='text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
              Choose Your Style
            </h2>
          </div>
          
          <ul className='grid gap-6 sm:grid-cols-2'>
            <li>
              <Link
                href='/programs/martialArt/boxing'
                className='block rounded-xl bg-[#111827] p-6 text-center text-xl font-bold text-[#F9FAFB] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#DC2626] hover:shadow-2xl'>
                Boxing
              </Link>
            </li>

            <li>
              <Link
                href='/programs/martialArt/muay-thai'
                className='block rounded-xl bg-[#111827] p-6 text-center text-xl font-bold text-[#F9FAFB] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#DC2626] hover:shadow-2xl'>
                Muay Thai
              </Link>
            </li>

            <li>
              <Link
                href='/programs/martialArt/judo'
                className='block rounded-xl bg-[#111827] p-6 text-center text-xl font-bold text-[#F9FAFB] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#DC2626] hover:shadow-2xl'>
                Judo
              </Link>
            </li>

            <li>
              <Link
                href='/programs/martialArt/taekwondo'
                className='block rounded-xl bg-[#111827] p-6 text-center text-xl font-bold text-[#F9FAFB] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#DC2626] hover:shadow-2xl'>
                Taekwondo
              </Link>
            </li>
          </ul>
          
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12'>
          <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl'>
            Ready to Build Your Strength and Discipline?
          </h2>

          <p className='mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300'>
            Start your martial arts journey with IronPulse and develop the
            skills, confidence, and discipline to become stronger every day.
          </p>

          <Link
            href='/membership'
            className='inline-block rounded-md bg-[#DC2626] px-7 py-3 text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
            Join IronPulse
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MartialArt;

