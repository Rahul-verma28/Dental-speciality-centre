"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import * as motion from "motion/react-client";

const testimonials = [
  {
    name: "Akanksha Devgun",
    quote:
      "I recently visited this dental clinic for my smile correction, and I’m thrilled to share my wonderful experience. From the moment I walked in, the atmosphere was welcoming and calming. Dr. Priyanka, the dentist, was fantastic. She had a reassuring demeanor and was very thorough in her examination. Her clear explanations about my dental health and treatment options showed her commitment to patient care. I felt well-informed and confident in the treatment plan she recommended.",
    avatar: "/images/patient-01.png",
    rating: 5,
  },
  {
    name: "Nandini Verma",
    quote:
      "Hi, my mother got treated with Dr. Priyanka. She was having fobia of dental treatment and with this fobia she went to many doctors but didn't get treated her teeth but Dr. Priyanka treated her so well that she has completed her treatment very nicely and without any fear. She is very good doctor and makes her patients so comfortable and treats very well. Thank u Dr. Priyanka for completing the entire process very politely and patiently.",
    avatar: "/images/patient-06.png",
    rating: 5,
  },
  {
    name: "Anup Haldar",
    quote:
      " 	I am very grateful to c.r park dentist for giving me such a comfortable and pain-free root canal treatment. The staff is very friendly as well as diligent towards their work. Special thanks to Dr. Priyanka Goswami for quick and painless treatment that she gave because of which I am able to live without any pain or discomfort. Thank you so much!! I would highly recommend you all to take your treatment from here.",
    avatar: "/images/patient-03.png",
    rating: 5,
  },
  {
    name: "Dhritiman Bharadwaj",
    quote:
      "I used to get worried whenever i have a dental issue over the years and most of the time i always get treatment but without explanation of the factors related to it. Dr. Priyanka Mam, really helped me to get comfortable with the treatment, also letting me know how to take care of my gum health and other related issues that may arise. She is very sweet, professional and soft-spoken. Through my 4 visits for root canal and crown insert she always keep on asking whether i am feeling pain or any issue. I highly recommend her for your dental problems. Thank you mam.",
    avatar: "/images/patient-04.png",
    rating: 5,
  },
  {
    name: "Kunal Kumar",
    quote:
      "I had an excellent experience with Dr. Priyanka. From the moment I walked in, the staff was friendly and welcoming. Dr. Priyanka was very professional and took the time to explain the procedures thoroughly, making sure I felt comfortable throughout. The clinic was clean and well-equipped, which further boosted my confidence in their services. The dental work was done efficiently and with minimal discomfort. I highly recommend Dr. Priyanka and this dental practice for their expertise, care, and exceptional customer service",
    avatar: "/images/patient-05.png",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="pt-10 bg-gradient-to-tl from-[#e6f0ff] to-[#ffffff]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-2xl px-5 md:px-10 mx-auto"
      >
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold text-[#1a2e4c]">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from happy patients who trusted us with their smile
          </p>
        </div>

        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          navigation={true}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-4xl mb-10 mx-auto bg-white p-10 rounded-3xl shadow-xl text-center hover:shadow-2xl transition duration-300">
                <div className="mb-4 w-fit rounded-full bg-blue-400/20 p-3 mx-auto">
                  <Quote className="h-8 w-8 text-blue-300" />
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-lg font-bold text-blue-600">
                  {testimonial.name}
                </p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
