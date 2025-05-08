"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import * as motion from "motion/react-client"


const team = [
  {
    name: "Dr Rajkumari Eliza Devi",
    role: "MDS Oral Medicine and Radiology",
    bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She founded Bright Smile Dental with a vision of patient-centered care.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Tarun Mittal",
    role: "MDS Periodontology",
    bio: "Specializing in orthodontics, Dr. Chen helps patients achieve perfectly aligned smiles using the latest techniques and technologies.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Pritam Mohanty",
    role: "MDS Orthodontics and Dentofacial Orthopaedics",
    bio: "With a gentle approach and special training in pediatric dentistry, Dr. Rodriguez makes dental visits enjoyable for our youngest patients.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Debarghya Bhattacharya ",
    role: "MDS Prosthodontics ",
    bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She founded Bright Smile Dental with a vision of patient-centered care.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Priyanka Goswami",
    role: "MDS Pedodontics and Preventive Dentistry",
    bio: "Specializing in orthodontics, Dr. Chen helps patients achieve perfectly aligned smiles using the latest techniques and technologies.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Mayank Sharma",
    role: "MDS Periodontology",
    bio: "With a gentle approach and special training in pediatric dentistry, Dr. Rodriguez makes dental visits enjoyable for our youngest patients.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Shivani",
    role: "MDS Endodontics ",
    bio: "With a gentle approach and special training in pediatric dentistry, Dr. Rodriguez makes dental visits enjoyable for our youngest patients.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Subhabrata Lodh",
    role: "Consultant Anaesthetist ",
    bio: "With a gentle approach and special training in pediatric dentistry, Dr. Rodriguez makes dental visits enjoyable for our youngest patients.",
    image: "/images/docter.png",
  },
];

export default function MeetOurTeam() {
  return (
    <motion.section className="py-10"
    initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
      <div className="max-w-screen-2xl p-5 md:px-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
            Meet The Docters
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-xl">
            Our experienced professionals are dedicated to providing you with
            the best dental care
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
              initial={{ scale: 0.9, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
                key={index}
                className="group overflow-hidden rounded-lg transition-all text-center mb-10 cursor-pointer"
              >
                <div className="relative h-30 w-30 mx-auto overflow-hidden rounded-full border bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500 font-semibold">{member.role}</p>
                  {/* <p className="text-gray-600">{member.bio}</p> */}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
