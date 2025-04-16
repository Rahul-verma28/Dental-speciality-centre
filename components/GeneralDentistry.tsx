import Image from "next/image";
import React from "react";

const GeneralDentistry = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-5xl">
            General Dentistry
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 font-semibold text-xl">
            Make your smile shine with our comprehensive general dentistry
            services
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {general.map((general, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-sm group ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              {/* Image */}
              <Image
                fill
                className="absolute w-full h-full inset-0 object-cover brightness-90 transition-transform duration-300"
                src={general.imgSrc}
                alt={"Value image"}
              />
              {/* Text Content */}
              <div
                className={`relative z-10 p-6 pb-20 text-blue-950 ${
                  index % 2 === 0 ? "text-left pr-40" : "text-right pl-40"
                }`}
              >
                <h2 className="text-xl font-semibold mb-2">{general.title}</h2>
                <p className="text-md">{general.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralDentistry;

const general = [
  {
    imgSrc: "/images/denatials01.png",
    title: "General Dentistry",
    description: "Cosmetic treatment to enhance the whiteness of teeth",
  },
  {
    imgSrc: "/images/denatials02.png",
    title: "Oral Surgery",
    description:
      "Surgical procedures, including extractios and dental implants",
  },
  {
    imgSrc: "/images/denatials03.png",
    title: "Crown and Bridges",
    description: "Restoration options for damaged or missing teeth",
  },
  {
    imgSrc: "/images/denatials04.png",
    title: "Periodontal Care",
    description:
      "Services for gum health, including scaling and root canal treatment",
  },
];
