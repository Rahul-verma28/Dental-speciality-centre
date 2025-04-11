import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Clock, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/contact-hero.png"
          alt="Dental clinic reception"
          fill
          className="object-cover brightness-[0.95]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-shadow-lg">CONTACT US</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              We&apos;re here to answer your questions and schedule your appointment
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
              <p className="mb-8 text-gray-600">
                Whether you&apos;re a new patient or a returning one, we&apos;re here to help you with any questions or concerns.
                Feel free to reach out to us using any of the methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">Call us to speak directly with our team</p>
                    <a href="tel:+15551234567" className="mt-1 block text-lg font-semibold text-blue-600">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-3 text-green-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">Send us an email anytime</p>
                    <a href="mailto:info@brightsmile.com" className="mt-1 block text-lg font-semibold text-green-600">
                      info@brightsmile.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-3 text-teal-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">Visit our modern dental clinic</p>
                    <address className="mt-1 not-italic text-lg font-semibold text-teal-600">
                      123 Smile Street, Dental District
                      <br />
                      Cityville, State 12345
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <div className="mt-2 space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-medium">Connect With Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-pink-100 hover:text-pink-600"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-400"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">Book an Appointment</h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Dentistry</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                        <SelectItem value="orthodontics">Orthodontics</SelectItem>
                        <SelectItem value="pediatric">Pediatric Dentistry</SelectItem>
                        <SelectItem value="emergency">Emergency Care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger id="time">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Please share any specific concerns or questions you have"
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="terms"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          terms and conditions
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Request Appointment
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/map.jpg"
                alt="Map location of Bright Smile Dental Clinic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-blue-600 p-3 text-white shadow-lg">
                  <MapPin className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Find quick answers to common questions about appointments and visits
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-medium">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-white">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready for Your Best Dental Experience?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            We&apos;re looking forward to welcoming you to our dental family
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="tel:+15551234567">Call Us Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

const faqs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our office, using our online booking form on this page, or sending us an email. We'll respond promptly to confirm your appointment time.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your ID, insurance information, completed new patient forms (available on our website), and a list of any medications you're currently taking. Arriving 15 minutes early helps us process your information.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact our office with your insurance information, and we'll verify your coverage before your appointment.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We accept cash, credit cards, and offer flexible payment plans. We also work with CareCredit to provide financing options for larger treatments.",
  },
  {
    question: "How early should I arrive for my appointment?",
    answer:
      "We recommend arriving 15 minutes before your scheduled appointment time to complete any necessary paperwork and ensure a smooth check-in process.",
  },
  {
    question: "What if I need to cancel my appointment?",
    answer:
      "We understand that schedules change. We appreciate at least 24 hours' notice for cancellations so we can offer the time slot to another patient in need.",
  },
]



// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Phone, Mail, MapPin } from "lucide-react"

// export default function ContactPage() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative h-[400px] w-full overflow-hidden">
//         <Image
//           src="/images/contact-hero.jpg"
//           alt="Dental clinic reception"
//           fill
//           className="object-cover brightness-[0.85]"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//           <div className="container text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Contact Us</h1>
//             <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
//               We&apos;re here to answer your questions and schedule your appointment
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-16">
//         <div className="container">
//           <div className="mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-6xl">
//             <div className="grid md:grid-cols-2">
//               {/* Left Panel - Contact Information */}
//               <div className="bg-[#1a2e4c] p-8 text-white md:p-12">
//                 <div className="flex h-full flex-col justify-between">
//                   <div>
//                     <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
//                       Contact Our
//                       <br />
//                       Dental Office
//                     </h2>

//                     <div className="mt-12 flex flex-col items-center space-y-10">
//                       <div className="flex flex-col items-center text-center">
//                         <div className="mb-3 rounded-full border-2 border-white/20 p-3">
//                           <Phone className="h-6 w-6" />
//                         </div>
//                         <p className="text-lg">(555) 123-4567</p>
//                       </div>

//                       <div className="flex flex-col items-center text-center">
//                         <div className="mb-3 rounded-full border-2 border-white/20 p-3">
//                           <Mail className="h-6 w-6" />
//                         </div>
//                         <p className="text-lg">info@brightsmile.com</p>
//                       </div>

//                       <div className="flex flex-col items-center text-center">
//                         <div className="mb-3 rounded-full border-2 border-white/20 p-3">
//                           <MapPin className="h-6 w-6" />
//                         </div>
//                         <p className="max-w-xs text-center text-lg">
//                           123 Smile Street, Dental District
//                           <br />
//                           Cityville, State 12345
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Panel - Contact Form */}
//               <div className="bg-white p-8 md:p-12">
//                 <form className="space-y-6">
//                   <div className="grid gap-6 md:grid-cols-2">
//                     <div className="space-y-2">
//                       <Label htmlFor="first-name" className="text-base">
//                         First Name <span className="text-blue-600">*</span>
//                       </Label>
//                       <Input id="first-name" required className="border-gray-300" />
//                       <p className="text-xs text-gray-500">This field is required.</p>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="last-name" className="text-base">
//                         Last Name <span className="text-blue-600">*</span>
//                       </Label>
//                       <Input id="last-name" required className="border-gray-300" />
//                       <p className="text-xs text-gray-500">This field is required.</p>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="email" className="text-base">
//                       Email <span className="text-blue-600">*</span>
//                     </Label>
//                     <Input id="email" type="email" required className="border-gray-300" />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="phone" className="text-base">
//                       Phone Number <span className="text-blue-600">*</span>
//                     </Label>
//                     <Input id="phone" type="tel" required className="border-gray-300" />
//                   </div>

//                   {/* <div className="space-y-3">
//                     <Label className="text-base">
//                       Select Subject? <span className="text-blue-600">*</span>
//                     </Label>
//                     <RadioGroup defaultValue="general" className="flex flex-wrap gap-6">
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="doctor" id="doctor" />
//                         <Label htmlFor="doctor" className="font-normal">
//                           Doctor Inquiry
//                         </Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="appointment" id="appointment" />
//                         <Label htmlFor="appointment" className="font-normal">
//                           Appointment Inquiry
//                         </Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="treatment" id="treatment" />
//                         <Label htmlFor="treatment" className="font-normal">
//                           Treatment Inquiry
//                         </Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="general" id="general" />
//                         <Label htmlFor="general" className="font-normal">
//                           General Inquiry
//                         </Label>
//                       </div>
//                     </RadioGroup>
//                   </div> */}

//                   <div className="space-y-2">
//                     <Label htmlFor="message" className="text-base">
//                       Message
//                     </Label>
//                     <Textarea
//                       id="message"
//                       placeholder="Write your message..."
//                       className="min-h-[120px] border-gray-300"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full bg-[#1a2e4c] px-8 py-3 text-base hover:bg-[#2a3e5c]"
//                     size="lg"
//                   >
//                     Send Message
//                   </Button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-8">
//         <div className="container">
//           <div className="overflow-hidden rounded-lg">
//             <div className="relative h-[400px] w-full">
//               <Image
//                 src="/images/map.jpg"
//                 alt="Map location of Bright Smile Dental Clinic"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="rounded-full bg-[#1a2e4c] p-3 text-white shadow-lg">
//                   <MapPin className="h-8 w-8" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Call Button */}
//       <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
//         <div className="hidden rounded-full bg-[#1a2e4c] px-6 py-3 text-white shadow-lg md:block">
//           <span className="text-lg font-medium">+1 (555) 123-4567</span>
//         </div>
//         <a
//           href="tel:+15551234567"
//           className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2e4c] text-white shadow-lg transition-transform hover:scale-105"
//         >
//           <Phone className="h-6 w-6" />
//         </a>
//       </div>
//     </main>
//   )
// }
