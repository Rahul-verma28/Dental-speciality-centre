import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BanknoteX,
  Bed,
  BriefcaseMedicalIcon,
  Clock,
  Star,
} from "lucide-react";
import TestimonialCarousel from "@/components/testimonial-carousel";
import StatCounter from "@/components/stat-counter";
import Carousel from "@/components/carousel";
import Slider from "@/components/UnderstandSwiper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/* <section className="relative h-[600px] w-full overflow-hidden">
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
      </section> */}
      <Carousel />
      {/* Quick Info Section */}
      {/* <section className="bg-white py-12">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-lg bg-blue-50 p-6">
            <div className="rounded-full bg-blue-100 p-3">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Call Us</h3>
              <p className="text-lg font-semibold text-blue-600">
                (555) 123-4567
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-green-50 p-6">
            <div className="rounded-full bg-green-100 p-3">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Opening Hours</h3>
              <p className="text-lg font-semibold text-green-600">
                Mon-Fri: 8am-6pm
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-teal-50 p-6">
            <div className="rounded-full bg-teal-100 p-3">
              <MapPin className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-lg font-semibold text-teal-600">
                123 Smile Street
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Meet the Team */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl">
              Our experienced professionals are dedicated to providing you with
              the best dental care
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg transition-all hover:shadow-xl text-center py-3"
              >
                <div className="relative h-30 w-30 mx-auto overflow-hidden rounded-full border bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500 font-semibold">{member.role}</p>
                  {/* <p className="text-gray-600">{member.bio}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity  */}

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-linear-to-bl from-cyan-700 to-cyan-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fill-opacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32 text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Boost your productivity. Start using our app today.
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Experience our comprehensive range of over 90 surgeries
                performed by our expert surgeons, utilizing the latest
                technology and, state-of-the-art, infrastructure for optimal
                care.
              </p>
              {/* <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <Link
                      href="#"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Get started
                    </Link>
                    <Link
                      href="#"
                      className="text-sm/6 font-semibold text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div> */}
            </div>
            <div className="">
              <Image
                // className=" w-200 h-200 "
                src="/images/docter.png"
                alt="App screenshot"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* Your Comfort */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-5xl">
            We care for your Comfort
            </h2>
            {/* <p className="mx-auto max-w-2xl text-gray-600 font-semibold text-xl">
              Your Concerns
            </p> */}
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {comfort.map((value, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-sm group"
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
                  {/* <value.icon className="h-9 w-9 font-bold mb-2" /> */}
                  {/* </div> */}
                  <p className=" w-[70%] text-gray-100">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      {/* <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We offer a comprehensive range of dental services to keep your
              smile healthy and beautiful
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
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
      </section> */}

      {/* Stats Section */}
      <section className="py-16 text-white bg-gray-50">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto ">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 bg-blue-900 rounded-2xl p-8 py-25">
            <StatCounter end={15} suffix="+" label="Years Experience" />
            <StatCounter end={10000} suffix="+" label="Happy Patients" />
            <StatCounter end={25} suffix="+" label="Dental Experts" />
            <StatCounter end={100} suffix="%" label="Satisfaction" />
          </div>
        </div>
      </section>

{/* Comfort Section */}
      <Slider/>

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
                At Bright Smile Dental, we combine advanced technology with
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
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied
              patients
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-white">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready for a Brighter Smile?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Schedule your appointment today and take the first step towards
            optimal dental health
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

// const services = [
//   {
//     title: "General Dentistry",
//     description:
//       "Comprehensive care including check-ups, cleanings, and preventative treatments to maintain your oral health.",
//     icon: Users,
//   },
//   {
//     title: "Cosmetic Dentistry",
//     description:
//       "Transform your smile with our range of cosmetic procedures including whitening, veneers, and more.",
//     icon: Star,
//   },
//   {
//     title: "Orthodontics",
//     description:
//       "Straighten your teeth and correct bite issues with our modern orthodontic solutions.",
//     icon: ArrowRight,
//   },
// ];

const team = [
  {
    name: "Dr Rajkumari Eliza Devi",
    role: "MDS Oral Medicine and Radiology",
    bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She founded Bright Smile Dental with a vision of patient-centered care.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Tarun Mittal",
    role: "MDS Periodontology",
    bio: "Specializing in orthodontics, Dr. Chen helps patients achieve perfectly aligned smiles using the latest techniques and technologies.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Pritam Mohanty",
    role: "MDS Orthodontics and Dentofacial Orthopaedics, Invisalign Provider, Cleft Specialist",
    bio: "With a gentle approach and special training in pediatric dentistry, Dr. Rodriguez makes dental visits enjoyable for our youngest patients.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Debarghya Bhattacharya ",
    role: "MDS Prosthodontics ",
    bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She founded Bright Smile Dental with a vision of patient-centered care.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Priyanka Goswami",
    role: "MDS Pedodontics and Preventive Dentistry",
    bio: "Specializing in orthodontics, Dr. Chen helps patients achieve perfectly aligned smiles using the latest techniques and technologies.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Mayank Sharma",
    role: "MDS Periodontology",
    bio: "With a gentle approach and special training in pediatric dentistry, Dr. Rodriguez makes dental visits enjoyable for our youngest patients.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Shivani",
    role: "MDS Endodontics ",
    bio: "With a gentle approach and special training in pediatric dentistry, Dr. Rodriguez makes dental visits enjoyable for our youngest patients.",
    image: "/images/docter.png",
  },
  {
    name: "Dr Subhabrata Lodh",
    role: "Consultant Anaesthetist ",
    bio: "With a gentle approach and special training in pediatric dentistry, Dr. Rodriguez makes dental visits enjoyable for our youngest patients.",
    image: "/images/docter.png",
  },
];

// const values = [
//   {
//     imgSrc: "/images/concert_image1.png",

//     description: "We understand you are worried and need time with the doctor",
//     icon: Clock,
//   },
//   {
//     imgSrc: "/images/concert_image2.png",

//     description: "We make sure you are comfortable while you are with us",
//     icon: Bed,
//   },
//   {
//     imgSrc: "/images/concert_image3.png",
//     description: "We won’t surprise you with any extra meds/tests",
//     icon: BriefcaseMedicalIcon,
//   },
//   {
//     imgSrc: "/images/concert_image4.png",
//     description: "Transparency is the base of trust – no hidden cost",
//     icon: BanknoteX,
//   },
//   {
//     imgSrc: "/images/concert_image5.png",
//     description: "We care for you like family",
//     icon: HandHeart,
//   },
// ];


const comfort = [
  {
    imgSrc: "/images/servicesnew01.png",

    description: "World Class Infrastructure",
    icon: Clock,
  },
  {
    imgSrc: "/images/servicesnew02.png",

    description: "Expert Dentists",
    icon: Bed,
  },
  {
    imgSrc: "/images/servicesnew03.png",
    description: "Comfortable Ambience",
    icon: BriefcaseMedicalIcon,
  },
  {
    imgSrc: "/images/servicesnew03.png",
    description: "Regular Audits",
    icon: BanknoteX,
  }
];