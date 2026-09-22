import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface StylePageProps {
  params: Promise<{
    style: string;
  }>;
}

const styles = {
  boxing: {
    name: "Boxing",
    description:
      "Develop powerful punches, quick footwork, defensive techniques, and strong conditioning through structured boxing training.",
    image: "/boxing.jpg",
  },

  "muay-thai": {
    name: "Muay Thai",
    description:
      "Learn striking techniques using punches, kicks, elbows, and knees while developing strength, endurance, discipline, and confidence.",
    image: "/mui-thai.jpg",
  },

  judo: {
    name: "Judo",
    description:
      "Build balance, coordination, and control through throws, grappling techniques, and defensive movements in a disciplined training environment.",
    image: "/judo.jpg",
  },

  taekwondo: {
    name: "Taekwondo",
    description:
      "Develop flexibility, speed, powerful kicking techniques, balance, and discipline through structured Taekwondo training.",
    image: "/taekowndo.jpg",
  },
};

const StylePage = async ({ params }: StylePageProps) => {
  const { style } = await params;

  const currentStyle = styles[style as keyof typeof styles];

  if (!currentStyle) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2'>
          <div>
            <p className='mb-3 font-semibold uppercase tracking-widest text-[#DC2626]'>
              IronPulse Martial Arts
            </p>

            <h1 className='mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl'>
              {currentStyle.name} Training
            </h1>

            <p className='max-w-xl text-lg leading-8 text-gray-300 md:text-xl'>
              {currentStyle.description}
            </p>

            <Link
              href='/membership'
              className='mt-8 inline-block rounded-md bg-[#DC2626] px-6 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
              Join IronPulse
            </Link>
          </div>

          <div className='overflow-hidden rounded-2xl shadow-2xl'>
            <Image
              src={currentStyle.image}
              width={600}
              height={450}
              alt={`${currentStyle.name} training at IronPulse`}
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-2xl bg-[#111827] p-8 shadow-xl md:p-12'>
            <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
              About The Style
            </p>

            <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
              Master Your {currentStyle.name} Skills
            </h2>

            <p className='max-w-3xl text-lg leading-8 text-gray-300'>
              Our {currentStyle.name.toLowerCase()} training is designed for
              beginners and experienced practitioners. You will develop
              technical skills, physical fitness, discipline, and confidence
              through structured training sessions led by experienced coaches.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-12 text-center'>
            <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
              Training Focus
            </p>

            <h2 className='mb-4 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
              What You&apos;ll Learn
            </h2>

            <p className='mx-auto max-w-2xl text-lg text-gray-300'>
              Build practical skills and improve your physical and mental
              abilities through consistent training.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              <div className='mb-4 text-4xl'>🥊</div>

              <h3 className='mb-3 text-xl font-bold text-[#F9FAFB]'>
                Technique
              </h3>

              <p className='leading-7 text-gray-300'>
                Learn proper techniques, movements, and combinations for your
                chosen martial art.
              </p>
            </div>

            <div className='rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              <div className='mb-4 text-4xl'>⚡</div>

              <h3 className='mb-3 text-xl font-bold text-[#F9FAFB]'>
                Speed & Agility
              </h3>

              <p className='leading-7 text-gray-300'>
                Improve your reaction time, movement, coordination, and overall
                athletic performance.
              </p>
            </div>

            <div className='rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              <div className='mb-4 text-4xl'>💪</div>

              <h3 className='mb-3 text-xl font-bold text-[#F9FAFB]'>
                Strength
              </h3>

              <p className='leading-7 text-gray-300'>
                Develop functional strength, endurance, balance, and physical
                conditioning.
              </p>
            </div>

            <div className='rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              <div className='mb-4 text-4xl'>🧠</div>

              <h3 className='mb-3 text-xl font-bold text-[#F9FAFB]'>
                Discipline
              </h3>

              <p className='leading-7 text-gray-300'>
                Build focus, patience, confidence, consistency, and a stronger
                mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-2xl border border-gray-700 bg-[#111827] p-8 shadow-xl md:p-12'>
            <div className='mb-10 text-center'>
              <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
                Why Train With Us
              </p>

              <h2 className='text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
                Training Benefits
              </h2>
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              <div className='rounded-lg bg-[#273043] p-5'>
                <h3 className='mb-2 text-lg font-bold text-[#F9FAFB]'>
                  ✓ Improve Physical Fitness
                </h3>
                <p className='text-gray-300'>
                  Improve strength, endurance, flexibility, and overall
                  conditioning.
                </p>
              </div>

              <div className='rounded-lg bg-[#273043] p-5'>
                <h3 className='mb-2 text-lg font-bold text-[#F9FAFB]'>
                  ✓ Build Confidence
                </h3>
                <p className='text-gray-300'>
                  Develop confidence through consistent practice and skill
                  improvement.
                </p>
              </div>

              <div className='rounded-lg bg-[#273043] p-5'>
                <h3 className='mb-2 text-lg font-bold text-[#F9FAFB]'>
                  ✓ Develop Discipline
                </h3>
                <p className='text-gray-300'>
                  Build a disciplined mindset through regular training and
                  dedication.
                </p>
              </div>

              <div className='rounded-lg bg-[#273043] p-5'>
                <h3 className='mb-2 text-lg font-bold text-[#F9FAFB]'>
                  ✓ Learn Practical Skills
                </h3>
                <p className='text-gray-300'>
                  Develop useful martial arts skills through structured coaching
                  and practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12'>
          <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl'>
            Ready to Start {currentStyle.name}?
          </h2>

          <p className='mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300'>
            Join IronPulse and start developing your strength, skills,
            confidence, and discipline through {currentStyle.name.toLowerCase()}{" "}
            training.
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

export default StylePage;
