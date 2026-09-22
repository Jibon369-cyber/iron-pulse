
import React from "react";

export interface ChooseIronpulse {
  title: string;
  description: string;
  icon: string;
}

const WhyChooseCard = ({
  title,
  description,
  icon,
}: ChooseIronpulse) => {
  return (
    <div className="rounded-xl bg-[#111827] p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-4 text-5xl">{icon}</div>

      <h3 className="mb-3 text-2xl font-bold text-[#F9FAFB]">
        {title}
      </h3>

      <p className="leading-7 text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseCard;

