import React from 'react';
import Link from "next/link";

const memberships = [
  {
    name: "Basic",
    price: "$29",
    description: "A simple plan for building a strong fitness foundation.",
    features: ["Gym Access", "Locker Access", "Basic Training Support"],
  },
  {
    name: "Standard",
    price: "$49",
    description: "A balanced plan for gym and martial arts training.",
    features: [
      "Gym Access",
      "Martial Arts Group Classes",
      "Locker Access",
      "Training Schedule Access",
    ],
  },
  {
    name: "Premium",
    price: "$79",
    description:
      "Complete access for serious fitness and martial arts training.",
    features: [
      "Full Gym Access",
      "All Martial Arts Classes",
      "Personal Training",
      "Locker Access",
      "Progress Guidance",
    ],
  },
];

const Membership = () => {
    return (
      <div>
        <section className='bg-[#273043] px-6 py-20 text-center md:px-12 lg:px-20'>
          <div className='mx-auto max-w-4xl'>
            <p className='mb-3 font-semibold uppercase tracking-widest text-[#DC2626]'>
              Membership Plans
            </p>

            <h1 className='mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl'>
              Choose Your Membership
            </h1>

            <p className='mx-auto max-w-3xl text-lg leading-8 text-gray-300 md:text-xl'>
              Choose a membership plan that fits your goals and training needs.
            </p>
          </div>
        </section>

        <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
          {" "}
          <div className='mx-auto max-w-7xl'>
            {" "}
            <div className='mb-12 text-center'>
              {" "}
              <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
                {" "}
                Membership Options{" "}
              </p>{" "}
              <h2 className='mb-4 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
                {" "}
                Find the Right Plan for You{" "}
              </h2>{" "}
              <p className='mx-auto max-w-2xl text-lg text-gray-300'>
                {" "}
                Choose a plan that matches your fitness goals, training style,
                and commitment level.{" "}
              </p>{" "}
            </div>{" "}
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {" "}
              {memberships.map((membership) => (
                <div
                  key={membership.name}
                  className='flex flex-col rounded-2xl bg-[#111827] p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
                  {" "}
                  <h3 className='mb-3 text-2xl font-bold text-[#F9FAFB]'>
                    {" "}
                    {membership.name}{" "}
                  </h3>{" "}
                  <p className='mb-6 text-gray-400'>
                    {" "}
                    {membership.description}{" "}
                  </p>{" "}
                  <div className='mb-8'>
                    {" "}
                    <span className='text-4xl font-extrabold text-[#DC2626]'>
                      {" "}
                      {membership.price}{" "}
                    </span>{" "}
                    <span className='ml-2 text-gray-400'> / month </span>{" "}
                  </div>{" "}
                  <ul className='mb-8 flex-1 space-y-4'>
                    {" "}
                    {membership.features.map((feature) => (
                      <li
                        key={feature}
                        className='flex items-center gap-3 text-gray-300'>
                        {" "}
                        <span className='text-[#DC2626]'>✓</span> {feature}{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                  <Link
                    href='/contact'
                    className='w-full rounded-md bg-[#DC2626] px-5 py-3 text-center font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
                    {" "}
                    Choose Plan{" "}
                  </Link>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
          {" "}
          <div className='mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12'>
            {" "}
            <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl'>
              {" "}
              Ready to Join IronPulse?{" "}
            </h2>{" "}
            <p className='mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300'>
              {" "}
              Choose your membership plan and take the next step toward a
              stronger, healthier, and more disciplined you.{" "}
            </p>{" "}
            <Link
              href='/contact'
              className='inline-block rounded-md bg-[#DC2626] px-7 py-3 text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
              {" "}
              Contact Us{" "}
            </Link>{" "}
          </div>{" "}
        </section>
      </div>
    );
};

export default Membership;