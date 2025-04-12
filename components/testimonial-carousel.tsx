// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import { Star, ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function TestimonialCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [autoplay, setAutoplay] = useState(true)

//   const testimonials = [
//     {
//       name: "Jennifer L.",
//       service: "Cosmetic Dentistry",
//       quote:
//         "I've been self-conscious about my smile for years. Dr. Johnson and her team transformed my teeth with veneers, and I couldn't be happier with the results. The entire process was comfortable and the staff was so supportive.",
//       rating: 5,
//       avatar: "/images/testimonial-1.jpg",
//     },
//     {
//       name: "Michael T.",
//       service: "Orthodontics",
//       quote:
//         "My teenager needed braces, and we were dreading the process. Dr. Chen made it so easy and painless. The staff is always friendly and accommodating with scheduling. The results are amazing!",
//       rating: 5,
//       avatar: "/images/testimonial-2.jpg",
//     },
//     {
//       name: "Sarah K.",
//       service: "General Dentistry",
//       quote:
//         "I used to be terrified of going to the dentist until I found Bright Smile. They're so gentle and patient. They take the time to explain everything and make sure you're comfortable. Best dental experience ever!",
//       rating: 5,
//       avatar: "/images/testimonial-3.jpg",
//     },
//   ]

//   useEffect(() => {
//     let interval: NodeJS.Timeout

//     if (autoplay) {
//       interval = setInterval(() => {
//         setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//       }, 3000)
//     }

//     return () => clearInterval(interval)
//   }, [autoplay, testimonials.length])

//   const handlePrev = () => {
//     setAutoplay(false)
//     setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
//   }

//   const handleNext = () => {
//     setAutoplay(false)
//     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//   }

//   return (
//     <div className="relative">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="w-full flex-shrink-0 px-4">
//               <Card className="mx-auto max-w-3xl">
//                 <CardContent className="p-6 md:p-8">
//                   <div className="mb-4 flex">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
//                       />
//                     ))}
//                   </div>
//                   <blockquote className="mb-6 text-lg italic text-gray-600 md:text-xl">
//                   &ldquo;{testimonial.quote}&rdquo;
//                   </blockquote>
//                   <div className="flex items-center gap-4">
//                     <div className="relative h-12 w-12 overflow-hidden rounded-full md:h-16 md:w-16">
//                       <Image
//                         src={testimonial.avatar || "/placeholder.svg"}
//                         alt={testimonial.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <div className="font-medium md:text-lg">{testimonial.name}</div>
//                       <div className="text-sm text-blue-600 md:text-base">{testimonial.service}</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6 flex justify-center gap-2">
//         <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
//           <ChevronLeft className="h-5 w-5" />
//           <span className="sr-only">Previous testimonial</span>
//         </Button>

//         {testimonials.map((_, index) => (
//           <Button
//             key={index}
//             variant="ghost"
//             size="sm"
//             onClick={() => {
//               setAutoplay(false)
//               setActiveIndex(index)
//             }}
//             className={`h-2 min-w-0 rounded-full p-0 ${activeIndex === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"}`}
//           >
//             <span className="sr-only">Go to testimonial {index + 1}</span>
//           </Button>
//         ))}

//         <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
//           <ChevronRight className="h-5 w-5" />
//           <span className="sr-only">Next testimonial</span>
//         </Button>
//       </div>
//     </div>
//   )
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily R.",
    quote:
      "Bright Smile Dental has completely changed how I feel about going to the dentist. The staff is so friendly, and they made me feel at ease from the moment I walked in.",
    avatar: "/images/patient-1.jpg",
    rating: 5,
  },
  {
    name: "James P.",
    quote:
      "I had a root canal done here, and it was surprisingly painless. The dentist explained everything clearly, and the procedure was quick and efficient.",
    avatar: "/images/patient-2.jpg",
    rating: 4,
  },
  {
    name: "Sophia L.",
    quote:
      "The team at Bright Smile Dental is amazing! They helped me with my braces, and now I can’t stop smiling. Highly recommend them!",
    avatar: "/images/patient-3.jpg",
    rating: 5,
  },
  {
    name: "Michael B.",
    quote:
      "I’ve been coming here for years, and the service is always top-notch. They truly care about their patients and provide excellent care.",
    avatar: "/images/patient-4.jpg",
    rating: 5,
  },
  {
    name: "Olivia T.",
    quote:
      "The best dental experience I’ve ever had. The clinic is clean, modern, and the staff is incredibly professional.",
    avatar: "/images/patient-5.jpg",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e6f0ff] to-[#ffffff]">
      <div className="max-w-screen-xl px-5 md:px-10 mx-auto">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl sm:text-5xl font-extrabold text-gray-800">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <div className="max-w-3xl mb-20 mx-auto bg-white p-10 rounded-3xl shadow-xl text-center hover:shadow-2xl transition duration-300">
                <div className="flex justify-center mb-6">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-blue-100">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-lg font-bold text-blue-600">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
