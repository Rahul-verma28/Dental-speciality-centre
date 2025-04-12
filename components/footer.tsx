import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" bg-linear-to-br from-gray-700 to-gray-950 text-gray-300">
      <div className="max-w-screen-2xl px-5 md:px-10 mx-auto py-12 ">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              <div className="relative h-20 w-40">
                <Image src="/logo.png" alt="Dental Speciality cntre Logo" fill className="object-contain" />
              </div>
              {/* <span className="text-xl font-bold text-white">Dental Speciality cntre</span> */}
            </Link>
            <p className="mb-4 text-gray-400">
              Providing exceptional dental care with a gentle touch for over 15 years.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-pink-600 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-blue-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-400">
                  Gallery & Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#general-dentistry" className="hover:text-blue-400">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services#cosmetic-dentistry" className="hover:text-blue-400">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services#orthodontics" className="hover:text-blue-400">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="/services#pediatric-dentistry" className="hover:text-blue-400">
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services#emergency-care" className="hover:text-blue-400">
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>
                  123 Smile Street, Dental District
                  <br />
                  Cityville, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>info@brightsmile.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <div>Mon-Sat: 8am-9pm</div>
                  <div>Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <div>© {new Date().getFullYear()} Dental Speciality cntre. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-blue-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
