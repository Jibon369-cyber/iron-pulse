
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#273043] px-6 py-20">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-7xl font-extrabold text-[#DC2626]">
          404
        </p>

        <h1 className="mb-5 text-4xl font-extrabold text-[#F9FAFB] md:text-5xl">
          Martial Arts Style Not Found
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-300">
          The martial arts style you are looking for does not exist in
          IronPulse. Please choose one of our available training styles.
        </p>

        <Link
          href="/programs/martialArt"
          className="inline-block rounded-md bg-[#DC2626] px-6 py-3 font-bold text-[#F9FAFB] transition hover:bg-[#B91C1C]"
        >
          Back to Martial Arts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

