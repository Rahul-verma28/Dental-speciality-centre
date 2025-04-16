"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
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
      className={`sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-sm shadow-2xl bg-gradient-to-r from-blue-300/80 to-teal-700/80
        // ${ isScrolled && " shadow-2xl bg-gradient-to-r from-blue-300/80 to-teal-700/80" }`
      }
    >
      <div className="max-w-screen-2xl px-5 md:px-10 mx-auto flex h-28 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-20 w-40">
            <Image
              src="/logo.png"
              alt="Bright Smile Dental Logo"
              fill
              className="object-contain"
            />
          </div>
          {/* <span className="text-xl font-bold text-blue-600">Bright Smile Dental</span> */}
        </Link>

        <nav className="hidden md:flex md:items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors hover:bg-gradient-to-br from-blue-300 to-teal-400/80 px-5 py-2 rounded-4xl ${
                pathname === link.href
                  ? "text-blue-950 border-b-2"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex text-white">
          <div className="hidden lg:flex items-center gap-2">
            <Phone className="h-4 w-4 " />
            <span className="text-sm font-medium hover:underline">
              (555) 123-4567
            </span>
          </div>
          <Link href="/appointment">
            <Button className=" bg-gradient-to-br from-white to-teal-100 hover:bg-gray-100 text-teal-500 hover:text-teal-600 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
              Book Appointment
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon">
              <Menu className="h-9 w-9 text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-gradient-to-br from-blue-300 to-teal-600 shadow-2xl backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col px-5">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <div className="relative h-20 w-40">
                    <Image
                      src="/logo.png"
                      alt="Bright Smile Dental Logo"
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
    </header>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, Phone, X } from "lucide-react";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled
//           ? "bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg"
//           : "bg-gradient-to-r from-blue-800 to-blue-600"
//       }`}
//     >
//       <div className="max-w-screen-2xl px-5 md:px-10 mx-auto flex h-20 items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <div className="relative h-30 w-30">
//             <Image
//               src="/logo.png"
//               alt="Bright Smile Dental Logo"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </Link>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex md:items-center md:gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`text-lg font-medium transition-all duration-200 py-6 ${
//                 pathname === link.href
//                   ? "text-white border-b-2 border-white"
//                   : "text-gray-200 hover:text-white hover:border-b-2 hover:border-gray-300"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Contact Info and Button */}
//         <div className="hidden items-center gap-4 md:flex text-white">
//           <div className="flex items-center gap-2">
//             <Phone className="h-4 w-4 text-gray-300" />
//             <span className="text-sm font-medium">(555) 123-4567</span>
//           </div>
//           <Button asChild className="bg-white text-blue-700 hover:bg-gray-200">
//             <Link href="/contact">Book Appointment</Link>
//           </Button>
//         </div>

//         {/* Mobile Menu */}
//         <Sheet>
//           <SheetTrigger asChild className="md:hidden">
//             <Button variant="ghost" size="icon">
//               <Menu className="h-6 w-6 text-white" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right">
//             <div className="flex flex-col">
//               <div className="flex items-center justify-between">
//                 <Link href="/" className="flex items-center gap-2">
//                   <div className="relative h-8 w-8">
//                     <Image
//                       src="/images/logo.png"
//                       alt="Bright Smile Dental Logo"
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                   <span className="text-lg font-bold text-blue-600">
//                     Bright Smile
//                   </span>
//                 </Link>
//                 <SheetTrigger asChild>
//                   <Button variant="ghost" size="icon">
//                     <X className="h-5 w-5" />
//                     <span className="sr-only">Close menu</span>
//                   </Button>
//                 </SheetTrigger>
//               </div>

//               <nav className="mt-8 flex flex-col gap-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className={`text-base font-medium transition-all duration-200 ${
//                       pathname === link.href
//                         ? "text-blue-600"
//                         : "text-gray-600 hover:text-blue-600"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </nav>

//               <div className="mt-8 flex flex-col gap-4">
//                 <div className="flex items-center gap-2">
//                   <Phone className="h-4 w-4 text-blue-600" />
//                   <span className="text-sm font-medium">(555) 123-4567</span>
//                 </div>
//                 <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
//                   <Link href="/contact">Book Appointment</Link>
//                 </Button>
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// }
