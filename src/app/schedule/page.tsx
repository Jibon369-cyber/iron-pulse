import React from 'react';
import ScheduleItem from "../components/ScheduleItem";
import Link from 'next/link';


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

const Schedule = () => {
    return (
      <div>
        <section className='bg-[#273043] px-6 py-20 text-center md:px-12 lg:px-20'>
          <div className='mx-auto max-w-4xl'>
            <p className='mb-3 font-semibold uppercase tracking-widest text-[#DC2626]'>
              Weekly Training
            </p>

            <h1 className='mb-6 text-4xl font-extrabold text-[#F9FAFB] md:text-6xl'>
              Training Schedule
            </h1>

            <p className='mx-auto max-w-3xl text-lg leading-8 text-gray-300 md:text-xl'>
              Find the right training session for your goals and stay consistent
              with your fitness journey.
            </p>
          </div>
        </section>

        <section className='bg-[#1F2937] px-6 py-20 md:px-12 lg:px-20'>
          <div className='mx-auto max-w-5xl'>
            <div className='mb-12 text-center'>
              <p className='mb-2 font-semibold uppercase tracking-widest text-[#DC2626]'>
                Weekly Classes
              </p>

              <h2 className='mb-4 text-3xl font-extrabold text-[#F9FAFB] md:text-4xl'>
                Choose Your Training Session
              </h2>

              <p className='mx-auto max-w-2xl text-lg text-gray-300'>
                Explore our weekly training sessions and find a time that works
                for you.
              </p>
            </div>

            <div className='mb-4 hidden grid-cols-4 gap-4 px-5 text-sm font-bold uppercase tracking-wide text-gray-400 md:grid'>
              <p>Day</p>
              <p>Time</p>
              <p>Program</p>
              <p>Trainer</p>
            </div>

            <div className='space-y-4'>
              {schedules.map((schedule) => (
                <ScheduleItem
                  key={schedule.day}
                  day={schedule.day}
                  time={schedule.time}
                  program={schedule.program}
                  trainer={schedule.trainer}
                />
              ))}
            </div>
          </div>
        </section>

        <section className='bg-[#273043] px-6 py-20 md:px-12 lg:px-20'>
          <div className='mx-auto max-w-4xl rounded-2xl bg-[#111827] px-6 py-14 text-center shadow-2xl md:px-12'>
            <h2 className='mb-5 text-3xl font-extrabold text-[#F9FAFB] md:text-5xl'>
              Ready to Start Training?
            </h2>

            <p className='mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300'>
              Choose your training program, stay consistent, and take the next
              step toward becoming stronger and more confident.
            </p>

            <Link
              href='/membership'
              className='inline-block rounded-md bg-[#DC2626] px-7 py-3 text-lg font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]'>
              Join IronPulse
            </Link>
          </div>
        </section>
      </div>
    );
};

export default Schedule;