import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, GraduationCap, Heart, Shield } from "lucide-react";
import UnderstandSwiper from "@/components/UnderstandSwiper";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <Image
          src="/images/clinic-building.jpg"
          alt="Dental team smiling"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Our Clinic
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90">
              Get to know our story, our team, and our commitment to exceptional
              dental care
            </p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Our Story
              </h2>
              <p className="mb-4 text-gray-600 text-lg">
                Bright Smile Dental Clinic was founded in 2008 with a simple
                mission: to provide exceptional dental care in a comfortable,
                patient-centered environment. What began as a small practice has
                grown into a trusted dental care provider in our community.
              </p>
              <p className="mb-6 text-gray-600 text-lg">
                Over the years, we&apos;ve expanded our team and services while
                maintaining our commitment to personalized care. We&apos;ve
                invested in the latest dental technology and techniques to
                ensure our patients receive the highest quality treatment
                available.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-teal-500" />
                  <div>
                    <h3 className="font-medium text-xl">Our Mission</h3>
                    <p className="text-gray-600">
                      To improve the oral health of our community through
                      compassionate, comprehensive dental care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-teal-500" />
                  <div>
                    <h3 className="font-medium text-xl">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the trusted dental care provider of choice, known
                      for excellence and patient satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/clinic-building.jpg"
                alt="Bright Smile Dental Clinic building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              These principles guide everything we do at Bright Smile Dental
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 w-fit">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
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

      {/* Comfort Section */}
      <UnderstandSwiper />

      {/* Accreditations */}
      {/* <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Accreditations
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We&apos;re proud to be recognized by these prestigious dental
              organizations
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-3 h-20 w-40 relative">
                  <Image
                    src={accreditation.logo || "/placeholder.svg"}
                    alt={accreditation.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-center text-sm text-gray-600">
                  {accreditation.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-500 py-16 text-white">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Ready for a Brighter Smile?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90 text-lg">
            Schedule your appointment today and take the first step towards
            optimal dental health
          </p>
          <Button className="bg-gradient-to-br from-white to-teal-100 hover:bg-gray-100 text-teal-500 hover:text-teal-600 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer mr-5">
            <Link href="/appointment">Request An Appointment</Link>
          </Button>
          <Button className="bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white  px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
            <Link href="/contact">Contact Us For Details</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our practice, from clinical care to patient service.",
    icon: Award,
  },
  {
    title: "Compassion",
    description:
      "We treat each patient with kindness, empathy, and respect, understanding dental anxiety.",
    icon: Heart,
  },
  {
    title: "Education",
    description:
      "We believe in continuous learning and educating our patients about their oral health.",
    icon: GraduationCap,
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest ethical standards and always put our patients' best interests first.",
    icon: Shield,
  },
];

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

// const accreditations = [
//   {
//     name: "American Dental Association",
//     logo: "/images/ada-logo.png",
//   },
//   {
//     name: "Academy of General Dentistry",
//     logo: "/images/agd-logo.png",
//   },
//   {
//     name: "American Academy of Cosmetic Dentistry",
//     logo: "/images/aacd-logo.png",
//   },
//   {
//     name: "American Association of Orthodontists",
//     logo: "/images/aao-logo.png",
//   },
// ];
