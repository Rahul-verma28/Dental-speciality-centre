"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header
      // className="sticky top-0 z-50 w-full transition-all duration-200"
      className={`sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-sm shadow-2xl bg-gradient-to-r from-blue-900/80 to-teal-700/80
        // ${
          isScrolled &&
          " shadow-2xl bg-gradient-to-r from-blue-300/80 to-teal-700/80"
        }`}
    >
      <div className="max-w-screen-2xl px-5 md:px-10 mx-auto flex h-28 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-18 sm:h-24 w-24 md:w-28">
            <Image
              src="/logo.png"
              alt="Dental & Aesthetic Care Centre Logo"
              fill
              className="object-contain"
            />
          </div>
          {/* <span className="text-xl font-bold text-blue-600">Dental & Aesthetic Care Centre</span> */}
        </Link>

        <nav className="hidden xl:flex md:items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors hover:bg-gradient-to-br from-blue-800 to-blue-950 px-5 py-2 rounded-4xl ${
                pathname === link.href
                  ? "text-blue-950 hover:text-white border-b-2"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="items-center gap-4 flex text-white">
          <div className="items-center gap-4 flex text-white">
            <Link
              href="https://www.invisalign.in"
              target="_blank"
              className="flex items-center gap-2"
            >
              <div className="relative h-20 w-32 sm:w-40">
                <Image
                  src="/invisalign-02.png"
                  alt="Dental & Aesthetic Care Centre Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <Link href="/appointment">
              <Button className="hidden lg:flex bg-gradient-to-br from-white to-teal-100 hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-950 text-teal-500 hover:text-teal-300 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
                Book Appointment
              </Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="xl:hidden">
              <div className="flex items-center justify-center">
                <Menu className="h-7 w-7 text-white bg-transparent cursor-pointer" />
              </div>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-gradient-to-br from-blue-300 to-teal-600 shadow-2xl backdrop-blur-sm lg:hidden"
            >
              <div className="flex flex-col px-5 pt-3">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-20 w-20">
                      <Image
                        src="/logo.png"
                        alt="Dental & Aesthetic Care Centre Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>

                <nav className="mt-8 flex flex-col gap-4 px-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={` font-medium transition-colors hover:text-blue-600 text-lg  ${
                        pathname === link.href ? "text-blue-600" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <Link href="/appointment">
                  <Button className="mt-5 bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white  px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
                    Request an Appointment
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}