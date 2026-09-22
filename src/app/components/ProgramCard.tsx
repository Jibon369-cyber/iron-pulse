
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ProgramCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

const ProgramCard = ({
  name,
  description,
  image,
  link,
}: ProgramCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-[#111827] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <Image
        src={image}
        width={400}
        height={250}
        alt={name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-[#F9FAFB]">
          {name}
        </h3>

        <p className="mb-6 leading-7 text-gray-300">
          {description}
        </p>

        <Link
          href={link}
          className="inline-block rounded-md bg-[#DC2626] px-5 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;

