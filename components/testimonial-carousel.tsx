"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Jennifer L.",
      service: "Cosmetic Dentistry",
      quote:
        "I've been self-conscious about my smile for years. Dr. Johnson and her team transformed my teeth with veneers, and I couldn't be happier with the results. The entire process was comfortable and the staff was so supportive.",
      rating: 5,
      avatar: "/images/testimonial-1.jpg",
    },
    {
      name: "Michael T.",
      service: "Orthodontics",
      quote:
        "My teenager needed braces, and we were dreading the process. Dr. Chen made it so easy and painless. The staff is always friendly and accommodating with scheduling. The results are amazing!",
      rating: 5,
      avatar: "/images/testimonial-2.jpg",
    },
    {
      name: "Sarah K.",
      service: "General Dentistry",
      quote:
        "I used to be terrified of going to the dentist until I found Bright Smile. They're so gentle and patient. They take the time to explain everything and make sure you're comfortable. Best dental experience ever!",
      rating: 5,
      avatar: "/images/testimonial-3.jpg",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="mx-auto max-w-3xl">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <blockquote className="mb-6 text-lg italic text-gray-600 md:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full md:h-16 md:w-16">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium md:text-lg">{testimonial.name}</div>
                      <div className="text-sm text-blue-600 md:text-base">{testimonial.service}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => {
              setAutoplay(false)
              setActiveIndex(index)
            }}
            className={`h-2 min-w-0 rounded-full p-0 ${activeIndex === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"}`}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}

        <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
