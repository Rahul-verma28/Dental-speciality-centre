import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const BrighterSmile = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-teal-500 py-16 text-white">
      <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Ready for a Brighter Smile?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-white/90 text-lg">
          Schedule your appointment today and take the first step towards
          optimal dental health
        </p>
        <div className="sm:flex justify-center gap-4">
          <Link href="/appointment">
            <Button className="bg-gradient-to-br from-white to-teal-100 hover:bg-gray-100 text-teal-500 hover:text-teal-600 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer mb-4">
              Request An Appointment
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white  px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
              Contact Us For Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrighterSmile;
