import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import TestimonialCarousel from "@/components/testimonial-carousel";
import StatCounter from "@/components/stat-counter";
import Carousel from "@/components/carousel";
import UnderstandSwiper from "@/components/UnderstandSwiper";
import MeetOurTeam from "@/components/MeetOurTeam";
import BrighterSmile from "@/components/BrighterSmile";
import YourComfort from "@/components/YourComfort";
import GeneralDentistry from "@/components/GeneralDentistry";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Carousel />

      {/* About Overview */}
      <section className="py-25">
        <motion.div
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }} // Triggers when 50% of the section is in view
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              className="relative h-[400px] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/gallery-01.jpeg"
                alt="Modern dental clinic interior"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
                Welcome to Dental & Aesthetic Care Centre
              </h2>
              <p className="mb-6 text-gray-600 text-lg">
                At Dental & Aesthetic Care Centre, we combine advanced technology with
                compassionate care to provide exceptional dental services for
                patients of all ages. Our modern facility is designed for your
                comfort, and our experienced team is dedicated to helping you
                achieve optimal oral health.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>State-of-the-art equipment and techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Comfortable, patient-centered approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Comprehensive dental care for the whole family</span>
                </div>
              </div>
              <Link href="/about">
                <Button asChild className="w-fit">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Meet the Team */}
      <MeetOurTeam />

      {/* Our Priority  */}
      <div className="bg-gradient-to-br from-[#e6f0ff] to-[#ffffff] py-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-cyan-700 to-cyan-600 px-6 pt-10 shadow-2xl sm:rounded-3xl sm:px-10 md:pt-24 lg:flex lg:gap-x-20 lg:px-14 lg:pt-0">
            {/* Background Glow */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#gradientGlow)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="gradientGlow">
                  <stop stopColor="#34D399" />
                  <stop offset="1" stopColor="#06B6D4" />
                </radialGradient>
              </defs>
            </svg>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mx-auto max-w-lg lg:mx-0 lg:flex-auto lg:py-32 text-left"
            >
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
                Your Smile, Our Priority
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Experience expert dental care with advanced treatments, a modern
                facility, and compassionate professionals dedicated to your
                comfort and well-being. From routine checkups to complex
                surgeries, we’ve got you covered.
              </p>
              <div className="mt-10 flex gap-x-6 items-center">
                <Link href="/appointment">
                  <Button className="bg-gradient-to-br from-[#e6f0ff] to-[#ffffff] hover:bg-gray-100 text-teal-500 hover:text-teal-600 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
                    Request an Appointment
                  </Button>
                </Link>
                <Link
                  href="services"
                  className="text-lg font-semibold text-white hover:underline"
                >
                  Explore Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative h-[600px] w-full lg:mt-0 lg:w-[36rem]"
            >
              <Image
                src="/dr-priyanka.png"
                alt="Smiling dentist at the clinic"
                fill
                className="object-contain w-200 h-300"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* General Dentistry */}
      <GeneralDentistry />    

      {/* Stats Section */}
      <section className="py-16 text-white bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto "
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 bg-linear-to-br from-gray-600 to-gray-950 rounded-2xl p-8 py-25">
            <StatCounter end={10} suffix="+" label="Years Experience" />
            <StatCounter end={7000} suffix="+" label="Happy Patients" />
            <StatCounter end={15} suffix="+" label="Dental Experts" />
            <StatCounter end={100} suffix="%" label="Satisfaction" />
          </div>
        </motion.div>
      </section>

      {/* Your Comfort */}
      <YourComfort />

      {/* Comfort Section */}
      <UnderstandSwiper />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <BrighterSmile />
    </main>
  );
}