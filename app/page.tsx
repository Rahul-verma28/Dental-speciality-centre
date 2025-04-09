import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, Phone, Star, Users } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StatCounter from "@/components/stat-counter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/hero-smile.jpg"
          alt="Happy patient with bright smile"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Brighten Your Smile with Expert Dental Care
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
              Experience comfortable, state-of-the-art dentistry in a welcoming environment
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-white py-12">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-lg bg-blue-50 p-6">
            <div className="rounded-full bg-blue-100 p-3">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Call Us</h3>
              <p className="text-lg font-semibold text-blue-600">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-green-50 p-6">
            <div className="rounded-full bg-green-100 p-3">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Opening Hours</h3>
              <p className="text-lg font-semibold text-green-600">Mon-Fri: 8am-6pm</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-teal-50 p-6">
            <div className="rounded-full bg-teal-100 p-3">
              <MapPin className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-lg font-semibold text-teal-600">123 Smile Street</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We offer a comprehensive range of dental services to keep your smile healthy and beautiful
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCounter end={15} suffix="+" label="Years Experience" />
            <StatCounter end={10000} suffix="+" label="Happy Patients" />
            <StatCounter end={25} suffix="+" label="Dental Experts" />
            <StatCounter end={100} suffix="%" label="Satisfaction" />
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Modern dental clinic interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome to Bright Smile Dental Clinic
              </h2>
              <p className="mb-6 text-gray-600">
                At Bright Smile Dental, we combine advanced technology with compassionate care to provide exceptional
                dental services for patients of all ages. Our modern facility is designed for your comfort, and our
                experienced team is dedicated to helping you achieve optimal oral health.
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
              <Button asChild className="w-fit">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">What Our Patients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied patients
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-white">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready for a Brighter Smile?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Schedule your appointment today and take the first step towards optimal dental health
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "General Dentistry",
    description:
      "Comprehensive care including check-ups, cleanings, and preventative treatments to maintain your oral health.",
    icon: Users,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our range of cosmetic procedures including whitening, veneers, and more.",
    icon: Star,
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth and correct bite issues with our modern orthodontic solutions.",
    icon: ArrowRight,
  },
]
