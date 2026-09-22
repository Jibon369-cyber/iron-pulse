
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* About Hero */}
      <section className="bg-[#273043] px-6 py-24 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl">
            About IronPulse
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            IronPulse is a fitness and martial arts community built to help
            people become stronger, healthier, and more disciplined.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          
          <div>
            <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              Our Mission
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-gray-300">
              Our mission is to create a motivating training environment
              where everyone can improve their strength, fitness, confidence,
              and discipline.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/about-img.jpg"
              width={600}
              height={400}
              alt="Gym training at IronPulse"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-[#273043] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-gray-700 bg-[#111827] p-8 shadow-xl md:p-12">
            <h2 className="mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl">
              What We Believe
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-gray-300">
              We believe that real progress comes from consistency,
              discipline, proper training, and a strong mindset.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

