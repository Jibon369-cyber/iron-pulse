
import React from "react";

export interface ScheduleTime {
  day: string;
  time: string;
  program: string;
  trainer: string;
}

const ScheduleItem = ({
  day,
  time,
  program,
  trainer,
}: ScheduleTime) => {
  return (
    <div className="grid gap-4 rounded-lg bg-[#273043] p-5 text-center shadow-md transition duration-300 hover:shadow-xl md:grid-cols-4 md:items-center md:text-left">
      <div>
        <p className="text-lg font-bold text-[#DC2626]">{day}</p>
      </div>

      <div>
        <p className="font-medium text-[#F9FAFB]">{time}</p>
      </div>

      <div>
        <p className="font-bold text-[#F9FAFB]">{program}</p>
      </div>

      <div>
        <p className="text-gray-300">{trainer}</p>
      </div>
    </div>
  );
};

export default ScheduleItem;

