
import Image from "next/image";
import Link from "next/link";

const PersonalTraining = () => {
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
              Personal Training
            </h1>

            <p className="max-w-xl text-lg leading-8 text-gray-300 md:text-xl">
              Get personalized coaching, structured workouts, and expert
              guidance designed around your individual fitness goals.
            </p>

            <Link
              href="/membership"
              className="mt-8 inline-block rounded-md bg-[#DC2626] px-6 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]"
            >
              Start Training
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/personal-training.jpg"
              width={600}
              height={450}
              alt="Personal training at IronPulse"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Personalized Coaching */}
      <section className="bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-[#111827] p-8 shadow-xl md:p-12">
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#DC2626]">
              Train With Purpose
            </p>

            <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              Personalized Coaching
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-gray-300">
              Every person has different goals, experience levels, and fitness
              needs. Our personal training sessions are designed to provide
              focused coaching and structured workouts based on your individual
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* One-to-One Training */}
      <section className="bg-[#273043] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#DC2626]">
              Expert Guidance
            </p>

            <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              One-to-One Training
            </h2>

            <p className="max-w-xl text-lg leading-8 text-gray-300">
              Work closely with an experienced trainer who can guide your
              technique, monitor your progress, and help you stay consistent
              throughout your fitness journey.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/trainer-1.jpg"
              width={600}
              height={400}
              alt="Personal trainer coaching a client"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#DC2626]">
              Why Personal Training
            </p>

            <h2 className="mb-4 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              What You&apos;ll Get
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Get focused support and a training experience built around your
              goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 text-4xl">🎯</div>

              <h3 className="mb-3 text-xl font-bold text-[#F9FAFB]">
                Goal Focused
              </h3>

              <p className="leading-7 text-gray-300">
                Training sessions designed around your personal fitness
                objectives.
              </p>
            </div>

            <div className="rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 text-4xl">🏋️</div>

              <h3 className="mb-3 text-xl font-bold text-[#F9FAFB]">
                Expert Coaching
              </h3>

              <p className="leading-7 text-gray-300">
                Learn proper exercise techniques with guidance from experienced
                trainers.
              </p>
            </div>

            <div className="rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 text-4xl">📈</div>

              <h3 className="mb-3 text-xl font-bold text-[#F9FAFB]">
                Track Progress
              </h3>

              <p className="leading-7 text-gray-300">
                Monitor your progress and make improvements through consistent
                training.
              </p>
            </div>

            <div className="rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 text-4xl">🤝</div>

              <h3 className="mb-3 text-xl font-bold text-[#F9FAFB]">
                Personal Support
              </h3>

              <p className="leading-7 text-gray-300">
                Get continuous motivation and support throughout your training
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#273043] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12">
          <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl">
            Ready to Train With a Coach?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300">
            Start your personal training journey with IronPulse and work
            toward your goals with expert guidance.
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

export default PersonalTraining;

