"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Jennifer L.",
    service: "Cosmetic Dentistry",
    quote:
      "I've been self-conscious about my smile for years. Dr. Johnson and her team transformed my teeth with veneers, and I couldn't be happier with the results. The entire process was comfortable and the staff was so supportive.",
    rating: 5,
    avatar: "/images/patient-01.png",
  },
  {
    id: 2,
    name: "Michael T.",
    service: "Orthodontics",
    quote:
      "My teenager needed braces, and we were dreading the process. Dr. Chen made it so easy and painless. The staff is always friendly and accommodating with scheduling. The results are amazing!",
    rating: 5,
    avatar: "/images/patient-02.png",
  },
  {
    id: 3,
    name: "Sarah K.",
    service: "General Dentistry",
    quote:
      "I used to be terrified of going to the dentist until I found Bright Smile. They're so gentle and patient. They take the time to explain everything and make sure you're comfortable. Best dental experience ever!",
    rating: 5,
    avatar: "/images/patient-03.png",
  },
  {
    id: 4,
    name: "David W.",
    service: "Emergency Dental Care",
    quote:
      "When I cracked my tooth on a Friday evening, I thought I'd be in pain all weekend. Bright Smile got me in within an hour! Dr. Johnson fixed me up, and I was pain-free by dinner time. Incredible service!",
    rating: 5,
    avatar: "/images/patient-04.png",
  },
  {
    id: 5,
    name: "Lisa M.",
    service: "Teeth Whitening",
    quote:
      "After years of coffee stains, my teeth were looking yellow. The professional whitening at Bright Smile made such a difference! My teeth are several shades whiter, and I keep getting compliments.",
    rating: 4,
    avatar: "/images/patient-05.png",
  },
  {
    id: 6,
    name: "Robert J.",
    service: "Dental Implants",
    quote:
      "I needed an implant after losing a tooth. The procedure was much easier than I expected, and the result looks completely natural. No one can tell which tooth is the implant!",
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
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
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
