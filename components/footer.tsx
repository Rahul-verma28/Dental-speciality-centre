import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  Link2,
} from "lucide-react";
import * as motion from "motion/react-client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-700 to-gray-950 text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-2xl px-5 md:px-10 mx-auto py-12 "
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-30 w-30">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Dental Speciality cntre Logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="mb-4 text-gray-400">
              Providing exceptional dental care with a gentle touch for over 10
              years.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/drpriyanka.mds?igsh=YmFkZjFobmFid2N1&utm_source=qr"
                target="_blank"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/drpriyanka.mds?igsh=YmFkZjFobmFid2N1&utm_source=qr"
                target="_blank"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-pink-600 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/drpriyanka.mds?igsh=YmFkZjFobmFid2N1&utm_source=qr"
                target="_blank"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-blue-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-blue-400 hover:underline"
                >
                  Gallery & Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="hover:text-blue-400 hover:underline"
                >
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#general-dentistry"
                  className="hover:text-blue-400 hover:underline"
                >
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cosmetic-dentistry"
                  className="hover:text-blue-400 hover:underline"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#orthodontics"
                  className="hover:text-blue-400 hover:underline"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pediatric-dentistry"
                  className="hover:text-blue-400 hover:underline"
                >
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#emergency-care"
                  className="hover:text-blue-400 hover:underline"
                >
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>E-792 Chittaranjan Park, New Delhi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>(+91) 1135619736</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>Support@dentalspecialitycentre.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <div>Mon-Sat: 11.00 AM – 8.00 PM</div>
                  <div>Sun: On prior appointment basis only</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-gray-800 py-6">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p>
                © {new Date().getFullYear()} Dental & Aesthetic Care Centre. All
                rights reserved.
              </p>
            </div>
            <div className="text-center">
              <p>
                Designed and Developed by{" "}
                <Link
                  href="https://www.linkedin.com/in/rahul-verma-09227a263/"
                  target="_blank"
                  className="hover:text-blue-400 font-bold"
                >
                  Rahul Verma <Link2 className="inline h-4 w-4" />
                </Link>
              </p>
            </div>
            <div className="flex gap-4 items-center justify-center justify-end">
              <Link
                href="/privacy-policy"
                className="hover:text-blue-400 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-&-conditions"
                className="hover:text-blue-400 hover:underline"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-blue-400 hover:underline"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
