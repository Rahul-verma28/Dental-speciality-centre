"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  Clock,
  Bed,
  BriefcaseMedicalIcon,
  BanknoteX,
  HandHeart,
} from "lucide-react";
import * as motion from "motion/react-client";

const values = [
  {
    imgSrc: "/images/concert_image1.png",
    description: "We understand you are worried and need time with the doctor",
    icon: Clock,
  },
  {
    imgSrc: "/images/concert_image2.png",
    description: "We won’t surprise you with any extra meds/tests",
    icon: BriefcaseMedicalIcon,
  },
  {
    imgSrc: "/images/concert_image3.png",
    description: "Transparency is the base of trust – no hidden cost",
    icon: BanknoteX,
  },
  {
    imgSrc: "/images/concert_image4.png",
    description: "We make sure you are comfortable while you are with us",
    icon: Bed,
  },
  {
    imgSrc: "/images/concert_image5.png",
    description: "We care for you like family – we are here for you always",
    icon: HandHeart,
  },
];

export default function UnderstandSwiper() {
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
            We understand!
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 font-semibold text-xl">
            Your Concerns
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {values.map((value, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={index}
                className="relative rounded-lg overflow-hidden shadow-sm group"
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
                  <value.icon className="h-9 w-9 font-bold mb-2" />
                  {/* </div> */}
                  <p className="w-[80%] md:w-[70%]  text-gray-100">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
