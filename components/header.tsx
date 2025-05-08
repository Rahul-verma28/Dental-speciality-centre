// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, Phone, ChevronDown, ChevronRight } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// // Service menu data structure
// const serviceMenuItems = [
//   {
//     title: "General",
//     href: "/services#general",
//     submenu: [
//       {
//         name: "Full mouth examination, 3D scanning and cleaning",
//         href: "/services/examination",
//       },
//       {
//         name: "Oral Cancer Screening",
//         href: "/services/oral-cancer-screening",
//       },
//       {
//         name: "Dental 'Tooth-coloured' Fillings",
//         href: "/services/tooth-coloured-fillings",
//       },
//       { name: "Dental Sealants", href: "/services/dental-sealants" },
//       { name: "Topical Fluoride Therapy", href: "/services/fluoride-therapy" },
//       { name: "Dental Emergencies", href: "/services/dental-emergencies" },
//       { name: "Gum Treatment", href: "/services/gum-treatment" },
//       { name: "Root Canal Treatment", href: "/services/root-canal" },
//       { name: "Pulpotomies & Pulpectomies", href: "/services/pulpotomies" },
//       { name: "Crown & Bridge", href: "/services/crown-bridge" },
//       { name: "Dentures", href: "/services/dentures" },
//       { name: "Night Guards", href: "/services/night-guards" },
//       { name: "Sports Guards", href: "/services/sports-guards" },
//       { name: "Family Dentistry", href: "/services/family-dentistry" },
//     ],
//   },
//   {
//     title: "Invisalign",
//     href: "/services#invisalign",
//     submenu: [{ name: "Invisalign Treatment", href: "/services/invisalign" }],
//   },
//   {
//     title: "Full Mouth Rehabilitations",
//     href: "/services#rehabilitation",
//     submenu: [
//       {
//         name: "Full Mouth Rehabilitation",
//         href: "/services/full-mouth-rehabilitation",
//       },
//     ],
//   },
//   {
//     title: "Cosmetic",
//     href: "/services#cosmetic",
//     submenu: [
//       { name: "Teeth Whitening", href: "/services/teeth-whitening" },
//       { name: "Veneers", href: "/services/veneers" },
//       {
//         name: "Digital Smile Makeovers",
//         href: "/services/digital-smile-makeover",
//       },
//       { name: "Braces", href: "/services/braces" },
//       { name: "Dental Aligners", href: "/services/dental-aligners" },
//       {
//         name: "Gummy Smile Reduction",
//         href: "/services/gummy-smile-reduction",
//       },
//       {
//         name: "Growth Modulation in Growing Patients",
//         href: "/services/growth-modulation",
//       },
//     ],
//   },
//   {
//     title: "Surgical",
//     href: "/services#surgical",
//     submenu: [
//       { name: "Dental Implants", href: "/services/dental-implants" },
//       { name: "All-on-Four Implants", href: "/services/all-on-four" },
//       { name: "Same Day implants", href: "/services/same-day-implants" },
//       {
//         name: "Implant-supported-Dentures",
//         href: "/services/implant-dentures",
//       },
//       { name: "Cortical Implants", href: "/services/cortical-implants" },
//       { name: "Surgical Extractions", href: "/services/surgical-extractions" },
//       { name: "Bone Grafts", href: "/services/bone-grafts" },
//     ],
//   },
//   {
//     title: "Problems We Treat",
//     href: "/services#problems",
//     submenu: [
//       {
//         name: "Dental anxiety, Dental Fear and Dental Phobia",
//         href: "/services/dental-anxiety",
//       },
//       { name: "Chipped or Cracked Teeth", href: "/services/chipped-teeth" },
//       { name: "Dental Trauma", href: "/services/dental-trauma" },
//       { name: "Wisdom Tooth Pain", href: "/services/wisdom-tooth-pain" },
//       { name: "Tooth Pain", href: "/services/tooth-pain" },
//       { name: "Sensitivity", href: "/services/sensitivity" },
//       { name: "Missing Tooth", href: "/services/missing-tooth" },
//       { name: "Teeth Grinding", href: "/services/teeth-grinding" },
//       { name: "Bleeding Gums", href: "/services/bleeding-gums" },
//       { name: "Bad Breath", href: "/services/bad-breath" },
//       { name: "Crooked Teeth", href: "/services/crooked-teeth" },
//       { name: "Tooth Stains", href: "/services/tooth-stains" },
//       { name: "Sleep Apnoea and Snoring", href: "/services/sleep-apnoea" },
//       { name: "Denture Repair", href: "/services/denture-repair" },
//     ],
//   },
// ];

// // Mobile menu item component with submenu support
// const MobileMenuItem = ({ item, isActive, level = 0 }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="w-full">
//       <div className="flex items-center justify-between">
//         <Link
//           href={item.href}
//           className={`py-2 text-lg font-medium ${
//             isActive ? "text-blue-600" : "text-white"
//           }`}
//           onClick={(e) => {
//             if (item.submenu) {
//               e.preventDefault();
//               setIsOpen(!isOpen);
//             }
//           }}
//         >
//           {item.name || item.title}
//         </Link>
//         {item.submenu && (
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-2 text-white hover:text-blue-600 transition-colors"
//           >
//             <ChevronDown
//               className={`h-5 w-5 transition-transform ${
//                 isOpen ? "rotate-180" : ""
//               }`}
//             />
//           </button>
//         )}
//       </div>
//       {isOpen && item.submenu && (
//         <div className="pl-4 border-l border-white/20 mt-1 space-y-2">
//           {item.submenu.map((subItem, idx) => (
//             <MobileMenuItem
//               key={idx}
//               item={subItem}
//               isActive={false}
//               level={level + 1}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
//   const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);
//   const submenuTimeoutRef = useRef(null);
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

//   const handleMouseEnter = (index) => {
//     clearTimeout(submenuTimeoutRef.current);
//     setActiveSubmenu(index);
//   };

//   const handleMouseLeave = () => {
//     submenuTimeoutRef.current = setTimeout(() => {
//       setActiveSubmenu(null);
//       setActiveSubSubmenu(null);
//     }, 300);
//   };

//   const handleSubMenuMouseEnter = (index) => {
//     clearTimeout(submenuTimeoutRef.current);
//     setActiveSubSubmenu(index);
//   };

//   const navLinks = [
//     { name: "HOME", href: "/" },
//     { name: "ABOUT US", href: "/about" },
//     { name: "SERVICES", href: "/services", hasSubmenu: true },
//     { name: "GALLERY", href: "/gallery" },
//     { name: "CONTACT US", href: "/contact" },
//   ];

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-sm shadow-2xl bg-gradient-to-r from-blue-300/80 to-teal-700/80`}
//     >
//       <div className="max-w-screen-2xl px-5 md:px-10 mx-auto flex h-28 items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="relative h-20 w-40">
//             <Image
//               src="/logo.png"
//               alt="Dental & Aesthetic Care Centre Logo"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </Link>

//         <nav className="hidden xl:flex md:items-center gap-2">
//           {navLinks.map((link, index) => (
//             // <div
//             //   key={link.name}
//             //   className="relative"
//             //   onMouseEnter={() => link.hasSubmenu && handleMouseEnter(index)}
//             //   onMouseLeave={handleMouseLeave}
//             // >
//             //   <Link
//             //     href={link.href}
//             //     className={`text-lg font-medium transition-colors hover:bg-gradient-to-br from-blue-800 to-blue-950 px-5 py-2 rounded-4xl flex items-center ${
//             //       pathname === link.href || pathname.startsWith(link.href + "/")
//             //         ? "text-blue-950 hover:text-white border-b-2"
//             //         : "text-white"
//             //     }`}
//             //   >
//             //     {link.name}
//             //     {link.hasSubmenu && <ChevronDown className="ml-1 h-4 w-4" />}
//             //   </Link>

//             //   {/* Main Services Dropdown */}
//             //   {link.hasSubmenu && activeSubmenu === index && (
//             //     // <div
//             //     //   className="absolute left-0 mt-1 w-64 bg-gradient-to-br from-blue-300 to-teal-600 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn"
//             //     //   onMouseEnter={() => clearTimeout(submenuTimeoutRef.current)}
//             //     //   onMouseLeave={handleMouseLeave}
//             //     // >
//             //     //   <div className="py-2">
//             //     //     {serviceMenuItems.map((item, idx) => (
//             //     //       <div
//             //     //         key={idx}
//             //     //         className="relative"
//             //     //         onMouseEnter={() => handleSubMenuMouseEnter(idx)}
//             //     //         onMouseLeave={() => setActiveSubSubmenu(null)}
//             //     //       >
//             //     //         <Link
//             //     //           href={item.href}
//             //     //           className={cn(
//             //     //             "flex items-center justify-between px-4 py-3 text-white hover:bg-blue-800/40 transition-colors",
//             //     //             activeSubSubmenu === idx && "bg-blue-800/40",
//             //     //           )}
//             //     //         >
//             //     //           <span>{item.title}</span>
//             //     //           {item.submenu && <ChevronRight className="h-4 w-4" />}
//             //     //         </Link>

//             //     //         {/* Sub-Services Dropdown */}
//             //     //         {item.submenu && activeSubSubmenu === idx && (
//             //     //           <div className="absolute left-full top-0 w-72 bg-gradient-to-br from-blue-400 to-teal-700 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn">
//             //     //             <div className="py-2 max-h-[calc(100vh-200px)] overflow-y-auto">
//             //     //               {item.submenu.map((subItem, subIdx) => (
//             //     //                 <Link
//             //     //                   key={subIdx}
//             //     //                   href={subItem.href}
//             //     //                   className="block px-4 py-2 text-white hover:bg-blue-800/40 transition-colors"
//             //     //                 >
//             //     //                   {subItem.name}
//             //     //                 </Link>
//             //     //               ))}
//             //     //             </div>
//             //     //           </div>
//             //     //         )}
//             //     //       </div>
//             //     //     ))}
//             //     //   </div>
//             //     // </div>
//             //     <div
//             //       className="absolute left-0 mt-1 w-64 bg-gradient-to-br from-blue-300 to-teal-600 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn"
//             //       onMouseEnter={() => clearTimeout(submenuTimeoutRef.current)}
//             //       onMouseLeave={handleMouseLeave}
//             //     >
//             //       <div className="py-2">
//             //         {serviceMenuItems.map((item, idx) => (
//             //           <div
//             //             key={idx}
//             //             className="relative"
//             //             onMouseEnter={() => handleSubMenuMouseEnter(idx)}
//             //             onMouseLeave={() => setActiveSubSubmenu(null)}
//             //           >
//             //             <Link
//             //               href={item.href}
//             //               className={cn(
//             //                 "flex items-center justify-between px-4 py-3 text-white hover:bg-blue-800/40 transition-colors",
//             //                 activeSubSubmenu === idx && "bg-blue-800/40"
//             //               )}
//             //             >
//             //               <span>{item.title}</span>
//             //               {item.submenu && <ChevronRight className="h-4 w-4" />}
//             //             </Link>

//             //             {/* Sub-Services Dropdown */}
//             //             {item.submenu && activeSubSubmenu === idx && (
//             //               <div
//             //                 className="absolute left-full top-0 w-72 bg-gradient-to-br from-blue-400 to-teal-700 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn"
//             //                 onMouseEnter={() =>
//             //                   clearTimeout(submenuTimeoutRef.current)
//             //                 }
//             //                 onMouseLeave={() => setActiveSubSubmenu(null)}
//             //               >
//             //                 <div className="py-2 max-h-[calc(100vh-200px)] overflow-y-auto">
//             //                   {item.submenu.map((subItem, subIdx) => (
//             //                     <Link
//             //                       key={subIdx}
//             //                       href={subItem.href}
//             //                       className="block px-4 py-2 text-white hover:bg-blue-800/40 transition-colors"
//             //                     >
//             //                       {subItem.name}
//             //                     </Link>
//             //                   ))}
//             //                 </div>
//             //               </div>
//             //             )}
//             //           </div>
//             //         ))}
//             //       </div>
//             //     </div>
//             //   )}
//             // </div>
//             <div
//               key={link.name}
//               className="relative"
//               onMouseEnter={() => link.hasSubmenu && handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   if (link.hasSubmenu) {
//                     setActiveSubmenu(index);
//                   }
//                 }}
//                 className={`text-lg font-medium transition-colors hover:bg-gradient-to-br from-blue-800 to-blue-950 px-5 py-2 rounded-4xl flex items-center ${
//                   pathname === link.href || pathname.startsWith(link.href + "/")
//                     ? "text-blue-950 hover:text-white border-b-2"
//                     : "text-white"
//                 }`}
//               >
//                 {link.name}
//                 {link.hasSubmenu && <ChevronDown className="ml-1 h-4 w-4" />}
//               </button>

//               {/* Main Services Dropdown */}
//               {link.hasSubmenu && activeSubmenu === index && (
//                 <div
//                   className="absolute left-0 mt-1 w-64 bg-gradient-to-br from-blue-300 to-teal-600 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn"
//                   onMouseEnter={() => clearTimeout(submenuTimeoutRef.current)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="py-2">
//                     {serviceMenuItems.map((item, idx) => (
//                       <div
//                         key={idx}
//                         className="relative"
//                         onMouseEnter={() => handleSubMenuMouseEnter(idx)}
//                         onMouseLeave={() => setActiveSubSubmenu(null)}
//                       >
//                         <Link
//                           href={item.href}
//                           className={cn(
//                             "flex items-center justify-between px-4 py-3 text-white hover:bg-blue-800/40 transition-colors",
//                             activeSubSubmenu === idx && "bg-blue-800/40"
//                           )}
//                         >
//                           <span>{item.title}</span>
//                           {item.submenu && <ChevronRight className="h-4 w-4" />}
//                         </Link>

//                         {/* Sub-Services Dropdown */}
//                         {item.submenu && activeSubSubmenu === idx && (
//                           <div
//                             className="absolute left-full top-0 w-72 bg-gradient-to-br from-blue-400 to-teal-700 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn"
//                             onMouseEnter={() =>
//                               clearTimeout(submenuTimeoutRef.current)
//                             }
//                             onMouseLeave={() => setActiveSubSubmenu(null)}
//                           >
//                             <div className="py-2 max-h-[calc(100vh-200px)] overflow-y-auto">
//                               {item.submenu.map((subItem, subIdx) => (
//                                 <Link
//                                   key={subIdx}
//                                   href={subItem.href}
//                                   className="block px-4 py-2 text-white hover:bg-blue-800/40 transition-colors"
//                                 >
//                                   {subItem.name}
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         <div className="hidden items-center gap-4 md:flex text-white">
//           <div className="hidden md:flex items-center gap-2">
//             <Phone className="h-4 w-4" />
//             <span className="text-md font-medium hover:underline">
//               (+91) 7978779649
//             </span>
//           </div>
//           <Link href="/appointment">
//             <Button className="bg-gradient-to-br from-white to-teal-100 hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-950 text-teal-500 hover:text-teal-300 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
//               Book Appointment
//             </Button>
//           </Link>
//         </div>

//         <Sheet>
//           <SheetTrigger asChild className="xl:hidden">
//             <Button size="icon">
//               <Menu className="h-9 w-9 text-white bg-transparent" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent
//             side="left"
//             className="bg-gradient-to-br from-blue-300 to-teal-600 shadow-2xl backdrop-blur-sm lg:hidden overflow-y-auto"
//           >
//             <div className="flex flex-col px-5">
//               <div className="flex items-center justify-between">
//                 <Link href="/" className="flex items-center gap-2">
//                   <div className="relative h-20 w-40">
//                     <Image
//                       src="/logo.png"
//                       alt="Dental & Aesthetic Care Centre Logo"
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                 </Link>
//               </div>

//               <nav className="mt-8 flex flex-col gap-4 px-4">
//                 {navLinks.map((link, index) => {
//                   if (!link.hasSubmenu) {
//                     return (
//                       <Link
//                         key={link.name}
//                         href={link.href}
//                         className={`font-medium transition-colors hover:text-blue-600 text-lg ${
//                           pathname === link.href
//                             ? "text-blue-600"
//                             : "text-white"
//                         }`}
//                       >
//                         {link.name}
//                       </Link>
//                     );
//                   } else {
//                     return (
//                       <MobileMenuItem
//                         key={link.name}
//                         item={{
//                           name: link.name,
//                           href: link.href,
//                           submenu: serviceMenuItems,
//                         }}
//                         isActive={pathname === link.href}
//                       />
//                     );
//                   }
//                 })}
//               </nav>

//               <Link href="/appointment">
//                 <Button className="mt-5 bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
//                   Request an Appointment
//                 </Button>
//               </Link>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// }

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
      className={`sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-sm shadow-2xl bg-gradient-to-r from-blue-900/80 to-teal-700/80
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

        <div className="hidden items-center gap-4 md:flex text-white">
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4 " />
            <span className="text-md font-medium hover:underline">
              (+91) 7978779649
            </span>
          </div>
          <Link href="/appointment">
            <Button className=" bg-gradient-to-br from-white to-teal-100 hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-950 text-teal-500 hover:text-teal-300 px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
              Book Appointment
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="xl:hidden">
            <Button size="icon">
              <Menu className="h-9 w-9 text-white bg-transparent" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-gradient-to-br from-blue-300 to-teal-600 shadow-2xl backdrop-blur-sm lg:hidden"
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
//             <span className="text-sm font-medium">(+91) 7978779649</span>
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
//                   <span className="text-sm font-medium">(+91) 7978779649</span>
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
