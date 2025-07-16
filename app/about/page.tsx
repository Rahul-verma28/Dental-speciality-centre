import Image from "next/image";
import {
  Award,
  CheckCircle,
  Clock,
  Coffee,
  Heart,
  MapPin,
  Music,
  Shield,
  Sparkles,
  Star,
  Wifi,
  Zap,
} from "lucide-react";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DoctorCard from "@/components/doctor-card";
import ValueCard from "@/components/value-card";

export const metadata: Metadata = {
  title: "About Us - Expert Dental Team | Dental Speciality Center Delhi",
  description:
    "Meet our expert dental team led by Dr. Priyanka Goswami. MDS specialists in orthodontics, implants, and pediatric dentistry in Delhi.",
  keywords:
    "dental team delhi, dr priyanka goswami, dental specialists delhi, best dentists chittaranjan park",
  openGraph: {
    title: "About Dental Speciality Center - Expert Dental Team in Delhi",
    description:
      "Meet our expert dental team and learn about our mission to provide excellent dental care in Delhi.",
    images: ["/images/gallery-01.jpeg"],
  },
  alternates: {
    canonical: "https://www.dentalspecialitycentre.in/about",
  },
};

const remainingDoctors = [
  {
    name: "Dr. Rajkumari Eliza Devi",
    role: "MDS Oral Medicine and Radiology",
    education: [
      "BDS (Kalinga Institute of Dental Sciences, KIIT University)",
      "MDS (Saraswati Dental College & Hospital, Ram Manohar Lohia Awadh University)",
    ],
    bio: "Dr. Rajkumari Eliza Devi is an expert in oral medicine and radiology, ensuring accurate diagnoses and effective treatment plans.",
    image: "/doctors/Eliza.png",
  },
  {
    name: "Dr. Tarun Mittal",
    role: "MDS Periodontology",
    education: [
      "BDS (Sudha Rastogi Dental College, Pt. Bhagwad Dayal University, Rohtak)",
      "MDS (Inderprastha Dental College & Hospital, CCU University)",
    ],
    bio: "Dr. Tarun Mittal is an expert in periodontology, ensuring patients receive the best care for their gum health.",
    image: "/doctors/Tarun.png",
  },
  {
    name: "Dr. Mayank Sharma",
    role: "MDS Oral & Maxillofacial Surgery",
    education: [
      "BDS (Sudha Rastogi Dental College, MDU Rohtak)",
      "MDS (ITS Dental College, CCS University)",
    ],
    bio: "Dr. Mayank Sharma specializes in oral and maxillofacial surgery, providing advanced surgical care for complex dental needs.",
    image: "/doctors/Mayank.png",
  },
  {
    name: "Dr. Pritam Mohanty",
    role: "MDS Orthodontics and Dentofacial Orthopaedics, Platinum Invisalign Provider, Cleft Specialist",
    education: [
      "BDS (Kalinga Institute of Dental Sciences, KIIT University)",
      "MDS (Saraswati Dental College & Hospital, Ram Manohar Lohia Awadh University)",
    ],
    bio: "Dr. Pritam Mohanty is a Platinum Invisalign Provider and cleft specialist, transforming smiles with advanced orthodontic care.",
    image: "/doctors/Pritam.png",
  },
  {
    name: "Dr. Debarghya Bhattacharya",
    role: "MDS Prosthodontics",
    education: [
      "BDS (Inderprastha Dental College & Hospital, CCU University)",
      "MDS (Inderprastha Dental College & Hospital, CCU University)",
    ],
    bio: "Dr. Debarghya Bhattacharya specializes in prosthodontics, restoring smiles with precision-crafted crowns, bridges, and dentures.",
    image: "/doctors/docter.png",
  },
  {
    name: "Dr. Subhabrata Lodh",
    role: "Consultant Anaesthetist",
    education: [
      "MBBS (Medical College, Kolkata)",
      "MD (Anaesthesiology, AIIMS New Delhi)",
    ],
    bio: "Dr. Subhabrata Lodh is an experienced consultant anaesthetist, ensuring patient safety and comfort during procedures.",
    image: "/doctors/Subhabrata.png",
  },
];

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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Dental & Aesthetic Care Centre
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90">
              Your friendly neighbourhood dental clinic in Chittaranjan Park,
              South Delhi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
                Welcome to Dental & Aesthetic Care Centre
              </h2>
              <p className="mb-4 text-gray-600 text-lg">
                Established in 2021, amidst the vibrant ambiance of this
                bustling locality known for its delectable food joints and
                welcoming community, our clinic stands as a beacon of modern
                dentistry with a humble touch.
              </p>
              <p className="mb-6 text-gray-600 text-lg">
                At Dental & Aesthetic Care Centre, our mission is simple yet
                profound - to provide advanced, evidence-based dentistry at an
                affordable cost, ensuring that everyone can access quality
                dental care without breaking the bank. We believe that a
                pleasing dental experience shouldn&apos;t be a luxury but a
                right for all.
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
                src="/images/gallery-01.jpeg"
                alt="Dental & Aesthetic Care Centre Clinic building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meet the Docters */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
              Meet The Doctors
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl">
              Our experienced professionals are dedicated to providing you with
              the best dental care
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* First card spans two columns */}
            <div className="sm:col-span-2">
              <DoctorCard
                name="Dr. Priyanka Goswami"
                role="Founder, MDS Pedodontics and Preventive Dentistry"
                education={[
                  "BDS (Kalinga Institute of Dental Sciences, KIIT University)",
                  "MDS (Inderprastha Dental College & Hospital, CCU University)",
                ]}
                bio="Dr. Priyanka Goswami is motivated by the profound impact she can make on her patients' lives through dentistry. Inspired by their smiles and gratitude, she strives to become a better dentist every day, believing in the transformative power of oral health care to enhance well-being and confidence. Her dedication to excellence and genuine care for her patients drive her relentless pursuit of improving lives through dentistry."
                image="/dr-priyanka.png"
                featured={true}
              />
            </div>

            {/* Remaining cards */}
            {remainingDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.name}
                name={doctor.name}
                role={doctor.role}
                education={doctor.education}
                bio={doctor.bio}
                image={doctor.image}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Motto */}
      <section className="bg-[#1a2e4c] py-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center"
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-5xl">
            Our Motto
          </h2>
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
            <div className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full border-2 border-white/20 p-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">PRECISE</h3>
            </div>
            <div className="hidden h-20 border-r border-white/20 md:block"></div>
            <div className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full border-2 border-white/20 p-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">METICULOUS</h3>
            </div>
            <div className="hidden h-20 border-r border-white/20 md:block"></div>
            <div className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full border-2 border-white/20 p-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">HUMANE</h3>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/90">
            At Dental & Aesthetic Care Centre, we take immense pride in
            fostering lifelong relationships with our patients, based on
            positive experiences and trust. Our motto encapsulates our approach
            to dentistry - where precision meets compassion, and attention to
            detail ensures your utmost comfort and satisfaction.
          </p>
        </motion.div>
      </section>

      {/* Sets us Apart */}
      <section className="bg-gray-50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-5xl">
              What Sets Us Apart
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg">
              What sets us apart is not just our commitment to affordable
              excellence but also the thoughtful amenities we offer to make your
              visit comfortable and enjoyable for all, including children.
            </p>
          </div>
          <p className="text-xl text-gray-600 font-semibold px-2 mb-4">
            Redefining your dental experience with:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<Coffee className="h-6 w-6" />}
              title="Snacks & Beverage Station"
              description="Enjoy complimentary refreshments during your visit to make your experience more pleasant."
            />
            <ValueCard
              icon={<Music className="h-6 w-6" />}
              title="Curated Music Playlists"
              description="Relax with our carefully selected music that helps create a calming atmosphere."
            />
            <ValueCard
              icon={<Wifi className="h-6 w-6" />}
              title="Wi-Fi Connectivity"
              description="Stay connected with our high-speed Wi-Fi throughout your appointment."
            />
            <ValueCard
              icon={<Zap className="h-6 w-6" />}
              title="Painless Anaesthesia"
              description="Experience pain-free dental procedures with our advanced anaesthesia techniques."
            />
          </div>
          <p className="text-xl text-gray-600 font-semibold px-2 py-6">
            Discover the difference with:
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Shield className="h-6 w-6" />}
              title="Transparent Pricing"
              description="No hidden fees or surprises - we believe in complete transparency with our patients."
            />
            <ValueCard
              icon={<Award className="h-6 w-6" />}
              title="Unparalleled Warranty"
              description="We stand behind our work with comprehensive warranty options for your peace of mind."
            />
            <ValueCard
              icon={<Star className="h-6 w-6" />}
              title="Lifetime FREE Cleaning"
              description="Members enjoy lifetime free cleaning and polishing services to maintain optimal oral health."
            />
          </div>
        </motion.div>
      </section>

      {/* Comfort Section */}
      {/* <UnderstandSwiper /> */}

      {/* Visit Us */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-screen-2xl px-5 md:px-10 mx-auto"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1a2e4c] sm:text-5xl">
                Visit Us
              </h2>
              <p className="mb-6 text-gray-600 text-lg">
                We&apos;re conveniently located in the Market 2 area of
                Chittaranjan Park. Plenty of free parking available.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-gray-600">
                      E-792 Chittaranjan Park, New Delhi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-lg">Hours</h3>
                    <p className="text-gray-600">
                      Mon – Sat: 11.00 AM – 8.00 PM
                    </p>
                    <p className="text-gray-600">
                      Sun: On prior appointment basis only
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:flex gap-4">
                <Link href="https://maps.app.goo.gl/whpT2JmaTwU7rLG3A">
                  <Button className="bg-gradient-to-br from-white to-teal-100 hover:bg-gray-100 text-teal-500 hover:text-teal-600 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer mb-4">
                    Get Directions
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white  px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12687.789096595514!2d77.24136680579437!3d28.536237761475945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce34dd43276f9%3A0xbfa418ad9a1d0a49!2sDr.%20Priyanka%20Goswami%20-%20Dental%20%26%20Aesthetic%20Care%20Centre!5e1!3m2!1sen!2sin!4v1746008120704!5m2!1sen!2sin"
                className="w-full h-[500px] rounded-2xl"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Embed"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
