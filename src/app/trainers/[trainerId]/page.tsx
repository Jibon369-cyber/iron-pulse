import { trainers } from "@/app/data/trainer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface TrainerPageProps {
  params: Promise<{
    trainerId: string;
  }>;
}



const TrainerProfile = async ({ params }: TrainerPageProps) => {
  const { trainerId } = await params;

  const trainer = trainers[trainerId as keyof typeof trainers];

  if (!trainer) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2'>
          <div>
            <p className='mb-3 font-semibold uppercase tracking-widest text-[#DC2626]'>
              IronPulse Trainer
            </p>

            <h1 className='mb-4 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl'>
              {trainer.name}
            </h1>

            <p className='mb-3 text-xl font-semibold text-[#DC2626]'>
              {trainer.role}
            </p>

            <p className='mb-6 text-lg text-gray-300'>{trainer.experience}</p>

            <Link
              href='/membership'
              className='inline-block rounded-md bg-[#DC2626] px-6 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
              Train With Us
            </Link>
          </div>

          <div className='overflow-hidden rounded-2xl shadow-2xl'>
            <Image
              src={trainer.image}
              width={600}
              height={500}
              alt={trainer.name}
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* About Trainer */}
      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-2xl bg-[#111827] p-8 shadow-xl md:p-12'>
            <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
              About The Trainer
            </p>

            <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
              Meet {trainer.name}
            </h2>

            <p className='max-w-3xl text-lg leading-8 text-gray-300'>
              {trainer.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Trainer Details */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-5xl'>
          <div className='grid gap-6 md:grid-cols-2'>
            <div className='rounded-xl bg-[#111827] p-6 shadow-lg'>
              <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-[#DC2626]'>
                Specialization
              </p>

              <h3 className='text-2xl font-bold text-[#F9FAFB]'>
                {trainer.specialty}
              </h3>
            </div>

            <div className='rounded-xl bg-[#111827] p-6 shadow-lg'>
              <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-[#DC2626]'>
                Experience
              </p>

              <h3 className='text-2xl font-bold text-[#F9FAFB]'>
                {trainer.experience}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12'>
          <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl'>
            Ready to Start Training?
          </h2>

          <p className='mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300'>
            Choose your program and start your journey with IronPulse today.
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

export default TrainerProfile;
