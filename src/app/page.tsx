
import Link from "next/link";
import Hero from "./components/Hero";
import ProgramCard from "./components/ProgramCard";
import TrainerCard from "./components/TrainerCard";
import WhyChooseCard from "./components/WhyChooseCard";
import ScheduleItem from "./components/ScheduleItem";

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
    link: "/programs/martial-arts",
  },
  {
    name: "Personal Training",
    description:
      "Get personalized guidance and training plans designed around your individual fitness goals.",
    image: "/personal-training.jpg",
    link: "/programs/personal-training",
  },
];


const whyChoose = [
  {
    title: "Expert Trainers",
    description:
      "Train with experienced coaches who guide you with proper techniques and personalized support.",
    icon: "💪",
  },
  {
    title: "Modern Equipment",
    description:
      "Train with quality equipment designed to help you build strength, fitness, and performance.",
    icon: "🏋️",
  },
  {
    title: "Flexible Programs",
    description:
      "Choose training programs that fit your goals, fitness level, and lifestyle.",
    icon: "🎯",
  },
  {
    title: "Supportive Community",
    description:
      "Train in a positive environment where members motivate and support each other.",
    icon: "🤝",
  },
];



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



const schedules = [
  {
    day: "Monday",
    time: "6:00 AM - 7:00 AM",
    program: "Gym Training",
    trainer: "Alex Rahman",
  },
  {
    day: "Tuesday",
    time: "7:00 PM - 8:00 PM",
    program: "Martial Arts",
    trainer: "Sarah Khan",
  },
  {
    day: "Wednesday",
    time: "6:00 PM - 7:00 PM",
    program: "Personal Training",
    trainer: "Michael Hasan",
  },
  {
    day: "Thursday",
    time: "7:00 PM - 8:00 PM",
    program: "Gym Training",
    trainer: "Alex Rahman",
  },
  {
    day: "Friday",
    time: "6:00 PM - 7:00 PM",
    program: "Martial Arts",
    trainer: "Sarah Khan",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <main>
        <Hero />
      </main>

      {/* Programs Section */}
      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        <div className='mx-auto max-w-7xl'>
          {/* Section Heading */}
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-4xl font-extrabold text-[#F9FAFB] md:text-5xl'>
              Our Programs
            </h2>

            <p className='text-lg text-gray-300'>
              Train your body. Master your discipline.
            </p>
          </div>

          {/* Program Cards */}
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
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

      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        {" "}
        <div className='mx-auto max-w-7xl'>
          {" "}
          {/* Section Heading */}{" "}
          <div className='mb-12 text-center'>
            {" "}
            <h2 className='mb-4 text-4xl font-extrabold text-[#F9FAFB] md:text-5xl'>
              {" "}
              Why Choose IronPulse{" "}
            </h2>{" "}
            <p className='text-lg text-gray-300'>
              {" "}
              Train smarter. Get stronger. Stay disciplined.{" "}
            </p>{" "}
          </div>{" "}
          {/* Why Choose Cards */}{" "}
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {" "}
            {whyChoose.map((service) => (
              <WhyChooseCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>

      <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
        {" "}
        <div className='mx-auto max-w-7xl'>
          {" "}
          {/* Section Heading */}{" "}
          <div className='mb-12 text-center'>
            {" "}
            <h2 className='mb-4 text-4xl font-extrabold text-[#F9FAFB] md:text-5xl'>
              {" "}
              Our Trainers{" "}
            </h2>{" "}
            <p className='mx-auto max-w-2xl text-lg text-gray-300'>
              {" "}
              Meet the experienced coaches behind IronPulse. Get expert
              guidance, stay motivated, and train with confidence.{" "}
            </p>{" "}
          </div>{" "}
          {/* Trainer Cards */}{" "}
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {" "}
            {trainers.map((trainer) => (
              <TrainerCard
                key={trainer.name}
                name={trainer.name}
                role={trainer.role}
                image={trainer.image}
                experience={trainer.experience}
                link={trainer.link}
              />
            ))}{" "}
          </div>{" "}
          {/* View All Trainers */}{" "}
          <div className='mt-12 text-center'>
            {" "}
            <Link
              href='/trainers'
              className='inline-block rounded-md bg-[#DC2626] px-6 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
              {" "}
              View All Trainers{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      <section className='bg-[#111827] px-6 py-20 md:px-12 lg:px-20'>
        {" "}
        <div className='mx-auto max-w-5xl'>
          {" "}
          {/* Section Heading */}{" "}
          <div className='mb-12 text-center'>
            {" "}
            <h2 className='mb-4 text-4xl font-extrabold text-[#F9FAFB] md:text-5xl'>
              {" "}
              Training Schedule{" "}
            </h2>{" "}
            <p className='mx-auto max-w-2xl text-lg text-gray-300'>
              {" "}
              Find a training session that fits your schedule and keep moving
              toward your goals.{" "}
            </p>{" "}
          </div>{" "}
          {/* Schedule Header */}{" "}
          <div className='mb-4 hidden grid-cols-4 gap-4 px-5 text-sm font-bold uppercase tracking-wide text-gray-400 md:grid'>
            {" "}
            <p>Day</p> <p>Time</p> <p>Program</p> <p>Trainer</p>{" "}
          </div>{" "}
          {/* Schedule Items */}{" "}
          <div className='space-y-4'>
            {" "}
            {schedules.map((schedule) => (
              <ScheduleItem
                key={schedule.day}
                day={schedule.day}
                time={schedule.time}
                trainer={schedule.trainer}
                program={schedule.program}
              />
            ))}{" "}
          </div>{" "}
          {/* View Full Schedule */}{" "}
          <div className='mt-10 text-center'>
            {" "}
            <Link
              href='/schedule'
              className='inline-block rounded-md bg-[#DC2626] px-6 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
              {" "}
              View Full Schedule{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
        {" "}
        <div className='mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12'>
          {" "}
          <h2 className='mb-5 text-4xl font-extrabold text-[#F9FAFB] md:text-5xl'>
            {" "}
            Ready to Transform Yourself?{" "}
          </h2>{" "}
          <p className='mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300'>
            {" "}
            Start your fitness journey today with IronPulse. Choose a program,
            stay consistent, and become stronger every day.{" "}
          </p>{" "}
          <Link
            href='/membership'
            className='inline-block rounded-md bg-[#DC2626] px-7 py-3 text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
            {" "}
            Join IronPulse{" "}
          </Link>{" "}
        </div>{" "}
      </section>
    </div>
  );
}

