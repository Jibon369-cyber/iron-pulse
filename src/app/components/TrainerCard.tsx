
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface TrainerPreview {
  name: string;
  role: string;
  image: string;
  experience: string;
  link: string;
}

const TrainerCard = ({
  name,
  role,
  image,
  experience,
  link,
}: TrainerPreview) => {
  return (
    <div className="overflow-hidden rounded-xl bg-[#111827] text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <Image
        src={image}
        width={400}
        height={250}
        alt={name}
        className="h-70 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-[#F9FAFB]">
          {name}
        </h3>

        <p className="mb-2 text-lg font-medium text-[#DC2626]">
          {role}
        </p>

        <p className="mb-5 text-gray-300">
          {experience}
        </p>

        <Link
          href="{link}"
          className="inline-block rounded-md bg-[#DC2626] px-5 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;

