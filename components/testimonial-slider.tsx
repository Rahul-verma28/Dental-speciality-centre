"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote, UserCircle2 } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Anjana Rakshit",
    service: "Cosmetic Dentistry",
    quote:
      "My experience at Dr. Priyanka Goswami's clinic was excellent. Her clinic is very well equipped and she made me feel comfortable and at ease. Throughout my treatment she was also very caring. Would definitely recommend!",
    rating: 5,
    avatar: "/images/patient-01.png",
  },
  {
    id: 2,
    name: "Trishita Chakraborty",
    service: "Orthodontics",
    quote:
      "Dr. Priyanka Goswami offers exceptional dental and aesthetic care with a perfect blend of professionalism and expertise. Her attention to detail and patient care is remarkable, and I’m thrilled with the results of my treatment. Highly recommended for anyone seeking quality dental services.",
    rating: 5,
    avatar: "/images/patient-02.png",
  },
  {
    id: 3,
    name: "Ritu",
    service: "General Dentistry",
    quote:
      "My Root Canal treatment was handled with all the details and clearing doubts. Her clinic is well equipped with advanced technology. A fearless experience of dental care. Dr. Priyanka is a dentist who genuinely cares for your Smile 😊",
    rating: 5,
    avatar: "/images/patient-03.png",
  },
  {
    id: 4,
    name: "Sushmita Nager",
    service: "Emergency Dental Care",
    quote:
      "Dr. Goswami is very welcoming and a great doctor. She makes her patients feel comfortable during dental treatments and also take utmost care of her patients. Her follow up is very good post any surgery and quite responsive.",
    rating: 5,
    avatar: "/images/patient-04.png",
  },
  {
    id: 5,
    name: "Aritro Palit",
    service: "Teeth Whitening",
    quote:
      "Dr Priyanka Goswami is an excellent dentist. She takes time to understand your problems and suggests very satisfactory treatment. Highly recomended.",
    rating: 4,
    avatar: "/images/patient-05.png",
  },
  {
    id: 6,
    name: "Sukanya Dasgupta",
    service: "Dental Implants",
    quote:
      "I highly recommend Dental & Aesthetic Care Centre, where Dr. Priyanka Goswami excels in providing exceptional dental care. Her meticulous approach and extensive expertise make every procedure seamless.",
    rating: 5,
    avatar: "/images/patient-06.png",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const itemsPerPage = 3 // Show 3 testimonials at once on desktop, fewer on mobile

  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - itemsPerPage + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Handle navigation
  const handlePrevious = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => Math.min(testimonials.length - itemsPerPage, prevIndex + 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/3">
              <Card className="h-full overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-blue-100 p-2 text-blue-600">
                    <Quote className="h-4 w-4" />
                  </div>
                  <blockquote className="mb-6 text-xl italic text-gray-700">&apos;{testimonial.quote}&apos;</blockquote>
                  <div className="mt-auto flex items-center gap-4">
                    <div>
                      <div className="font-medium flex items-center gap-1"><UserCircle2/> {testimonial.name}</div>
                      <div className="text-sm text-blue-600">{testimonial.service}</div>
                      <div className="mt-1 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="mt-8 flex justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonials</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex >= testimonials.length - itemsPerPage}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonials</span>
        </Button>
      </div>
    </div>
  )
}
