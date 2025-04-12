"use client";

import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [slides] = useState([
    {
      imgSrc: "/images/hero-01.jpeg",
      imgAlt: "A smiling dental professional with a patient in a modern clinic.",
      title: "Your Smile, Our Priority",
      description: "At Dental Speciality Centre, we blend advanced technology with gentle care to give you the confidence to smile brighter.",
    },    
    {
      imgSrc: "/images/hero-02.jpeg",
      imgAlt: "Close-up of dental tools being used by a specialist.",
      title: "Expert Dental Care",
      description: "Our team of experienced dentists specializes in creating personalized treatments that are as unique as your smile.",
    },    
    {
      imgSrc: "/images/hero-05.jpg",
      imgAlt: "A happy family with perfect smiles, sitting together.",
      title: "Smiles for the Whole Family",
      description: "From kids to seniors, we’re here for every stage of your dental journey with comfort, care, and compassion.",
    },
    {
      imgSrc: "/images/hero-04.webp",
      imgAlt: "Modern dental clinic reception with a welcoming staff member.",
      title: "Book Your Appointment Today",
      description: "Your perfect smile is just one visit away. Schedule now and experience dental care that puts *you* first.",
    }
    
  ]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const autoplayIntervalTime = 5000;

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, autoplayIntervalTime);

    return () => clearInterval(autoplay);
  }, [currentSlideIndex]);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlideIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 relative h-[85vh]"
          >
            {/* Title and description */}
            <div className="lg:px-20 lg:py-14 absolute inset-0 z-10 flex flex-col items-center justify-evenly gap-2 bg-gradient-to-t from-black/85 to-transparent px-10 py-12">
              <div className="w-full lg:w-[90%] flex flex-col gap-2">
                <h3 className="text-3xl md:text-7xl font-bold text-white">
                  {slide.title}
                </h3>
                <p className="md:w-1/2 w-full text-xl text-gray-300">
                  {slide.description}
                </p>
              </div>
            </div>
            <img
              className="absolute w-full h-full inset-0 object-cover brightness-80"
              src={slide.imgSrc}
              alt={slide.imgAlt}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {/* <div
        className="absolute rounded bottom-3 md:bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-4 md:gap-3 px-1.5 py-1 md:px-2"
        role="group"
        aria-label="slides"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition ${
              currentSlideIndex === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;


// "use client"  
// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function Carousels() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full max-w-xs"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }



// "use client";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";

// export function Carousels() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 4000, stopOnInteraction: false })
//   );

//   return (
//     <Carousel plugins={[plugin.current]} className="w-full max-w-xs">
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//     </Carousel>
//   );
// }