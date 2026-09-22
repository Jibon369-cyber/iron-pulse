
import Link from "next/link";
import TrainerCard from "../components/TrainerCard";


const trainers = [
  {
    name: "Alex Rahman",
    role: "Head Gym Trainer",
    image: "/trainer-1.jpg",
    experience: "8+ Years Experience",
    link: "/trainers/alex-rahman",
  },
  {
    name: "Sarah Khan",
    role: "Martial Arts Coach",
    image: "/trainer2.jpg",
    experience: "6+ Years Experience",
    link: "/trainers/sarah-khan",
  },
  {
    name: "Michael Hasan",
    role: "Personal Trainer",
    image: "/trainer-3.jpg",
    experience: "7+ Years Experience",
    link: "/trainers/michael-hasan",
  },
];

const TrainersPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className='bg-[#273043] px-6 py-24 text-center md:px-12 lg:px-20'>
        <div className='mx-auto max-w-4xl'>
          <p className='mb-3 font-semibold uppercase tracking-widest text-[#DC2626]'>
            Meet The Team
          </p>

          <h1 className='mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl'>
            Our Trainers
          </h1>

          <p className='mx-auto max-w-3xl text-lg leading-8 text-gray-300 md:text-xl'>
            Meet the experienced coaches who will guide you, challenge you, and
            help you reach your fitness and martial arts goals.
          </p>
        </div>
      </section>

      {/* Trainers Section */}
      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
              Expert Coaching
            </p>

            <h2 className='mb-4 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
              Train With The Best
            </h2>

            <p className='mx-auto max-w-2xl text-lg text-gray-300'>
              Our trainers bring experience, discipline, and dedication to every
              training session.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {trainers.map((trainer) => (
              <TrainerCard
                key={trainer.name}
                name={trainer.name}
                role={trainer.role}
                image={trainer.image}
                experience={trainer.experience}
                link={trainer.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12'>
          <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl'>
            Ready to Start Training?
          </h2>

          <p className='mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300'>
            Choose your training program and start working with our experienced
            coaches today.
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

export default TrainersPage;

