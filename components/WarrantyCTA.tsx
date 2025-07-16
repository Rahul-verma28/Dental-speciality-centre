// components/WarrantyCTA.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WarrantyCTA() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-2xl px-5 md:px-10 mx-auto"
      >
        <div className="grid md:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a2e4c]">
              Lifetime Warranty on Restorative Treatments
            </h2>
            <p className="mb-6 text-gray-600 text-lg">
              We proudly offer a unique lifetime warranty on our restorative
              dental procedures, ensuring you enjoy peace of mind and a healthy
              smile for years to come.
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-500" />
                <span>Applies to fillings, crowns, implants & more</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-500" />
                <span>Free replacements & repairs within warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-500" />
                <span>Bi-annual checkups keep your warranty active</span>
              </div>
              <Link href="/warranty">
                <Button className="mt-8 bg-gradient-to-br from-blue-800 to-blue-950 text-white px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
                  Explore Warranty Policy
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center items-center">
            <Image
              src="/service-images/insurance.png"
              alt="Dental Warranty"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
