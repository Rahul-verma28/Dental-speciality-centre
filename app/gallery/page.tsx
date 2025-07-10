import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import GalleryGrid from "@/components/gallery-grid";
import TestimonialSlider from "@/components/testimonial-slider";
import BrighterSmile from "@/components/BrighterSmile";
import * as motion from "motion/react-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
}

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/images/gallery-hero.jpg"
          alt="Smiling patient"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/50 to-black/30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Smile Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90">
              Beautiful smiles created by our expert dental team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-5xl">
              Transforming Smiles, Changing Lives
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              At Dental & Aesthetic Care Centre, we take pride in creating beautiful,
              healthy smiles that boost our patients&apos; confidence and
              improve their quality of life. Browse our gallery to see examples
              of our work and the real results our patients have experienced.
            </p>
            <div className="sm:flex justify-center gap-4">
              <Link href="/appointment">
                <Button className="mr-2 bg-gradient-to-br from-white to-teal-100 hover:bg-gray-100 text-teal-500 hover:text-teal-600 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer mb-4">
                  Book Your Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button className="bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white  px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gray-50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-5xl">
              Smile Gallery
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-lg">
              Explore our collection of beautiful smiles created at Dental & Aesthetic Care Centre
            </p>
          </div>

          <GalleryGrid />
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-5xl">
              What Our Patients Say
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-lg">
              Read what our patients have to say about their experience at
              Dental & Aesthetic Care Centre
            </p>
          </div>

          <TestimonialSlider />
        </motion.div>
      </section>

      {/* Featured Video Testimonial */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className=" flex items-center gap-4">
                <div className="mb-4 w-fit rounded-full bg-blue-400/20 p-3">
                  <Quote className="h-8 w-8 text-blue-300" />
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Hear From Our Patients
                </h2>
              </div>
              <blockquote className="mb-6 text-lg italic text-gray-500">
                I had an excellent experience with Dr. Priyanka. From the moment I walked in, the staff was friendly and welcoming. Dr. Priyanka was very professional and took the time to explain the procedures thoroughly, making sure I felt comfortable throughout. The clinic was clean and well-equipped, which further boosted my confidence in their services. The dental work was done efficiently and with minimal discomfort. I highly recommend Dr. Priyanka and this dental practice for their expertise, care, and exceptional customer service
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/images/patient-01.png"
                    alt="Sarah K."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Sarah K.</div>
                  <div className="text-sm text-blue-300">
                    Patient for 3 years
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <BrighterSmile />
    </main>
  );
}
