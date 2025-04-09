// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent } from "@/components/ui/card"
// import { Star } from "lucide-react"

// export default function GalleryPage() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative h-[400px] w-full overflow-hidden">
//         <Image
//           src="/images/gallery-hero.jpg"
//           alt="Smiling patient"
//           fill
//           className="object-cover brightness-[0.85]"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//           <div className="container mx-auto text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
//               Gallery & Testimonials
//             </h1>
//             <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
//               See our work and hear from our satisfied patients
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Before & After Gallery */}
//       <section className="py-16">
//         <div className="container mx-auto">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Before & After Gallery</h2>
//             <p className="mx-auto max-w-2xl text-gray-600">See the transformations we've created for our patients</p>
//           </div>

//           <Tabs defaultValue="cosmetic" className="w-full">
//             <div className="mb-8 flex justify-center">
//               <TabsList>
//                 <TabsTrigger value="cosmetic">Cosmetic</TabsTrigger>
//                 <TabsTrigger value="orthodontic">Orthodontic</TabsTrigger>
//                 <TabsTrigger value="restorative">Restorative</TabsTrigger>
//               </TabsList>
//             </div>

//             <TabsContent value="cosmetic" className="mt-0">
//               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//                 {cosmeticGallery.map((item, index) => (
//                   <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm">
//                     <div className="grid grid-cols-2">
//                       <div className="relative h-48">
//                         <Image
//                           src={item.before || "/placeholder.svg"}
//                           alt="Before treatment"
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
//                           Before
//                         </div>
//                       </div>
//                       <div className="relative h-48">
//                         <Image
//                           src={item.after || "/placeholder.svg"}
//                           alt="After treatment"
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute bottom-2 left-2 rounded bg-teal-500/90 px-2 py-1 text-xs text-white">
//                           After
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-medium">{item.title}</h3>
//                       <p className="text-sm text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="orthodontic" className="mt-0">
//               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//                 {orthodonticGallery.map((item, index) => (
//                   <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm">
//                     <div className="grid grid-cols-2">
//                       <div className="relative h-48">
//                         <Image
//                           src={item.before || "/placeholder.svg"}
//                           alt="Before treatment"
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
//                           Before
//                         </div>
//                       </div>
//                       <div className="relative h-48">
//                         <Image
//                           src={item.after || "/placeholder.svg"}
//                           alt="After treatment"
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute bottom-2 left-2 rounded bg-teal-500/90 px-2 py-1 text-xs text-white">
//                           After
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-medium">{item.title}</h3>
//                       <p className="text-sm text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="restorative" className="mt-0">
//               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//                 {restorativeGallery.map((item, index) => (
//                   <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm">
//                     <div className="grid grid-cols-2">
//                       <div className="relative h-48">
//                         <Image
//                           src={item.before || "/placeholder.svg"}
//                           alt="Before treatment"
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
//                           Before
//                         </div>
//                       </div>
//                       <div className="relative h-48">
//                         <Image
//                           src={item.after || "/placeholder.svg"}
//                           alt="After treatment"
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute bottom-2 left-2 rounded bg-teal-500/90 px-2 py-1 text-xs text-white">
//                           After
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-medium">{item.title}</h3>
//                       <p className="text-sm text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Patient Testimonials</h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               Read what our patients have to say about their experience at Bright Smile Dental
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="overflow-hidden">
//                 <CardContent className="p-6">
//                   <div className="mb-4 flex">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
//                       />
//                     ))}
//                   </div>
//                   <blockquote className="mb-4 italic text-gray-600">"{testimonial.quote}"</blockquote>
//                   <div className="flex items-center gap-4">
//                     <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                       <Image
//                         src={testimonial.avatar || "/placeholder.svg"}
//                         alt={testimonial.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <div className="font-medium">{testimonial.name}</div>
//                       <div className="text-sm text-gray-500">{testimonial.service}</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <p className="mb-6 text-gray-600">
//               We're proud to maintain a 4.9-star rating across 200+ reviews on Google and Yelp
//             </p>
//             <div className="flex justify-center gap-4">
//               <Button variant="outline" asChild>
//                 <Link href="https://google.com" target="_blank">
//                   Read Google Reviews
//                 </Link>
//               </Button>
//               <Button variant="outline" asChild>
//                 <Link href="https://yelp.com" target="_blank">
//                   Read Yelp Reviews
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Video Testimonials */}
//       <section className="py-16">
//         <div className="container mx-auto">
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Video Testimonials</h2>
//             <p className="mx-auto max-w-2xl text-gray-600">Hear directly from our patients about their experience</p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {videoTestimonials.map((video, index) => (
//               <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm">
//                 <div className="relative aspect-video w-full">
//                   <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="rounded-full bg-white/90 p-4">
//                       <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-medium">{video.title}</h3>
//                   <p className="text-sm text-gray-600">{video.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-white">
//         <div className="container mx-auto text-center">
//           <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Smile?</h2>
//           <p className="mx-auto mb-8 max-w-2xl text-white/90">
//             Join our satisfied patients and experience the Bright Smile difference
//           </p>
//           <Button size="lg" variant="secondary" asChild>
//             <Link href="/contact">Book Your Appointment</Link>
//           </Button>
//         </div>
//       </section>
//     </main>
//   )
// }

// const cosmeticGallery = [
//   {
//     title: "Teeth Whitening",
//     description: "Professional whitening treatment that removed years of staining and discoloration.",
//     before: "/images/before-whitening.jpg",
//     after: "/images/after-whitening.jpg",
//   },
//   {
//     title: "Porcelain Veneers",
//     description: "Custom veneers to correct chipped, misaligned, and discolored front teeth.",
//     before: "/images/before-veneers.jpg",
//     after: "/images/after-veneers.jpg",
//   },
//   {
//     title: "Smile Makeover",
//     description: "Complete smile transformation using a combination of cosmetic procedures.",
//     before: "/images/before-makeover.jpg",
//     after: "/images/after-makeover.jpg",
//   },
// ]

// const orthodonticGallery = [
//   {
//     title: "Clear Aligners",
//     description: "Invisible aligners used to straighten teeth without traditional braces.",
//     before: "/images/before-aligners.jpg",
//     after: "/images/after-aligners.jpg",
//   },
//   {
//     title: "Traditional Braces",
//     description: "Metal braces used to correct severe misalignment and bite issues.",
//     before: "/images/before-braces.jpg",
//     after: "/images/after-braces.jpg",
//   },
//   {
//     title: "Crossbite Correction",
//     description: "Treatment to correct a crossbite that was causing jaw pain and uneven wear.",
//     before: "/images/before-crossbite.jpg",
//     after: "/images/after-crossbite.jpg",
//   },
// ]

// const restorativeGallery = [
//   {
//     title: "Dental Implants",
//     description: "Implant to replace a missing tooth, restoring function and appearance.",
//     before: "/images/before-implant.jpg",
//     after: "/images/after-implant.jpg",
//   },
//   {
//     title: "Dental Crown",
//     description: "Porcelain crown to restore a damaged tooth's strength and appearance.",
//     before: "/images/before-crown.jpg",
//     after: "/images/after-crown.jpg",
//   },
//   {
//     title: "Full Mouth Restoration",
//     description: "Comprehensive treatment to restore function and aesthetics to severely damaged teeth.",
//     before: "/images/before-restoration.jpg",
//     after: "/images/after-restoration.jpg",
//   },
// ]

// const testimonials = [
//   {
//     name: "Jennifer L.",
//     service: "Cosmetic Dentistry",
//     quote:
//       "I've been self-conscious about my smile for years. Dr. Johnson and her team transformed my teeth with veneers, and I couldn't be happier with the results. The entire process was comfortable and the staff was so supportive.",
//     rating: 5,
//     avatar: "/images/testimonial-1.jpg",
//   },
//   {
//     name: "Michael T.",
//     service: "Orthodontics",
//     quote:
//       "My teenager needed braces, and we were dreading the process. Dr. Chen made it so easy and painless. The staff is always friendly and accommodating with scheduling. The results are amazing!",
//     rating: 5,
//     avatar: "/images/testimonial-2.jpg",
//   },
//   {
//     name: "Sarah K.",
//     service: "General Dentistry",
//     quote:
//       "I used to be terrified of going to the dentist until I found Bright Smile. They're so gentle and patient. They take the time to explain everything and make sure you're comfortable. Best dental experience ever!",
//     rating: 5,
//     avatar: "/images/testimonial-3.jpg",
//   },
//   {
//     name: "David W.",
//     service: "Emergency Dental Care",
//     quote:
//       "When I cracked my tooth on a Friday evening, I thought I'd be in pain all weekend. Bright Smile got me in within an hour! Dr. Johnson fixed me up, and I was pain-free by dinner time. Incredible service!",
//     rating: 5,
//     avatar: "/images/testimonial-4.jpg",
//   },
//   {
//     name: "Lisa M.",
//     service: "Teeth Whitening",
//     quote:
//       "After years of coffee stains, my teeth were looking yellow. The professional whitening at Bright Smile made such a difference! My teeth are several shades whiter, and I keep getting compliments.",
//     rating: 4,
//     avatar: "/images/testimonial-5.jpg",
//   },
//   {
//     name: "Robert J.",
//     service: "Dental Implants",
//     quote:
//       "I needed an implant after losing a tooth. The procedure was much easier than I expected, and the result looks completely natural. No one can tell which tooth is the implant!",
//     rating: 5,
//     avatar: "/images/testimonial-6.jpg",
//   },
// ]

// const videoTestimonials = [
//   {
//     title: "Emily's Smile Makeover Journey",
//     description: "Emily shares her experience getting a complete smile makeover at Bright Smile Dental.",
//     thumbnail: "/images/video-thumb-1.jpg",
//   },
//   {
//     title: "John's Dental Implant Experience",
//     description: "John discusses how dental implants changed his life after losing several teeth.",
//     thumbnail: "/images/video-thumb-2.jpg",
//   },
//   {
//     title: "The Williams Family Dental Care",
//     description: "The Williams family talks about why they've trusted Bright Smile for over a decade.",
//     thumbnail: "/images/video-thumb-3.jpg",
//   },
// ]


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page