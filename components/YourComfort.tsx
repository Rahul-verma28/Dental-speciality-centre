import { BanknoteX, Bed, BriefcaseMedicalIcon, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client"


const YourComfort = () => {
  return (
    <section className="bg-gray-50 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-2xl px-5 md:px-10 mx-auto"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
            We care for your Comfort
          </h2>
          {/* <p className="mx-auto max-w-2xl text-gray-600 font-semibold text-xl">
              Your Concerns
            </p> */}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {comfort.map((value, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-sm group"
            >
              {/* Image */}
              <Image
                fill
                className="absolute w-full h-full inset-0 object-cover brightness-90 transition-transform duration-300 group-hover:scale-105"
                src={value.imgSrc}
                alt={"Value image"}
              />
              {/* Text Content */}
              <div className="relative z-10 p-6 pt-40 text-white">
                {/* <div className=" w-fit"> */}
                {/* <value.icon className="h-9 w-9 font-bold mb-2" /> */}
                {/* </div> */}
                <p className=" w-[70%] text-gray-100">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default YourComfort;

const comfort = [
  {
    imgSrc: "/images/servicesnew01.png",

    description: "World Class Infrastructure",
    icon: Clock,
  },
  {
    imgSrc: "/images/servicesnew02.png",

    description: "Expert Dentists",
    icon: Bed,
  },
  {
    imgSrc: "/images/servicesnew03.png",
    description: "Comfortable Ambience",
    icon: BriefcaseMedicalIcon,
  },
  {
    imgSrc: "/images/servicesnew04.png",
    description: "Regular Audits",
    icon: BanknoteX,
  },
];
