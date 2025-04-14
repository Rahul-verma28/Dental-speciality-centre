// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Facebook, Instagram, Twitter } from "lucide-react";

// export default function Appointment() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative h-[450px] w-full overflow-hidden">
//         <Image
//           src="/images/book-appointment.jpg"
//           alt="Dental clinic reception"
//           fill
//           className="object-cover brightness-[0.95]"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//           {/* <div className="max-w-screen-2xl px-5 md:px-10 mx-auto text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-shadow-lg">Book Your Oppointment</h1>
//             <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
//               Experience top-notch dental care with our expert team. Schedule your appointment today and take the first step towards a healthier smile.
//             </p>
//           </div> */}
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-16">
//         <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
//           <div className="grid gap-12 md:grid-cols-2">
//             <div>
//               <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
//                 Get In Touch
//               </h2>
//               <p className="mb-8 text-gray-600">
//                 Whether you&apos;re a new patient or a returning one, we&apos;re
//                 here to help you with any questions or concerns. Feel free to
//                 reach out to us using any of the methods below.
//               </p>

//               <div className="mt-8">
//                 <h3 className="mb-4 font-medium">Connect With Us</h3>
//                 <div className="flex gap-4">
//                   <Link
//                     href="https://facebook.com"
//                     target="_blank"
//                     className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600"
//                   >
//                     <Facebook className="h-5 w-5" />
//                   </Link>
//                   <Link
//                     href="https://instagram.com"
//                     target="_blank"
//                     className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-pink-100 hover:text-pink-600"
//                   >
//                     <Instagram className="h-5 w-5" />
//                   </Link>
//                   <Link
//                     href="https://twitter.com"
//                     target="_blank"
//                     className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-400"
//                   >
//                     <Twitter className="h-5 w-5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="rounded-lg bg-white p-6 shadow-sm">
//                 <h2 className="mb-6 text-3xl font-bold">Book an Appointment</h2>
//                 <form className="space-y-4">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div className="space-y-2">
//                       <Label htmlFor="first-name">First Name</Label>
//                       <Input
//                         id="first-name"
//                         placeholder="Enter your first name"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="last-name">Last Name</Label>
//                       <Input
//                         id="last-name"
//                         placeholder="Enter your last name"
//                       />
//                     </div>
//                   </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="Enter your email"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         placeholder="Enter your phone number"
//                       />
//                     </div>

//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div className="space-y-2">
//                       <Label htmlFor="date">Preferred Date</Label>
//                       <Input id="date" type="date" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="time">Preferred Time</Label>
//                       <Select>
//                         <SelectTrigger id="time">
//                           <SelectValue placeholder="Select a time" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="morning">
//                             Morning (8AM - 12PM)
//                           </SelectItem>
//                           <SelectItem value="afternoon">
//                             Afternoon (12PM - 4PM)
//                           </SelectItem>
//                           <SelectItem value="evening">
//                             Evening (4PM - 6PM)
//                           </SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-2">
//                     <Checkbox id="terms" />
//                     <div className="grid gap-1.5 leading-none">
//                       <Label
//                         htmlFor="terms"
//                         className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                       >
//                         I agree to the{" "}
//                         <Link
//                           href="/terms"
//                           className="text-blue-600 hover:underline"
//                         >
//                           terms and conditions
//                         </Link>
//                       </Label>
//                     </div>
//                   </div>

//                   <Button type="submit" className="w-full">
//                     Book Appointment
//                   </Button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
//           <div className="mb-12 text-center">
//             <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-5xl">
//               Frequently Asked Questions
//             </h2>
//             <p className="mx-auto max-w-2xl text-gray-600 text-lg">
//               Find answers to common questions about our dental services
//             </p>
//           </div>

//           <div className="mx-auto max-w-3xl">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger className="text-left text-xl">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent className="text-lg text-gray-700">
//                     {faq.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// const faqs = [
//   {
//     question: "How do I schedule an appointment?",
//     answer:
//       "You can schedule an appointment by calling our office, using our online booking form on this page, or sending us an email. We'll respond promptly to confirm your appointment time.",
//   },
//   {
//     question: "What should I bring to my first appointment?",
//     answer:
//       "Please bring your ID, insurance information, completed new patient forms (available on our website), and a list of any medications you're currently taking. Arriving 15 minutes early helps us process your information.",
//   },
//   {
//     question: "Do you accept dental insurance?",
//     answer:
//       "Yes, we accept most major dental insurance plans. Please contact our office with your insurance information, and we'll verify your coverage before your appointment.",
//   },
//   {
//     question: "What payment options do you offer?",
//     answer:
//       "We accept cash, credit cards, and offer flexible payment plans. We also work with CareCredit to provide financing options for larger treatments.",
//   },
//   {
//     question: "How early should I arrive for my appointment?",
//     answer:
//       "We recommend arriving 15 minutes before your scheduled appointment time to complete any necessary paperwork and ensure a smooth check-in process.",
//   },
//   {
//     question: "What if I need to cancel my appointment?",
//     answer:
//       "We understand that schedules change. We appreciate at least 24 hours' notice for cancellations so we can offer the time slot to another patient in need.",
//   },
// ];






"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    // termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    // lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    // termsAccepted: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validateForm = () => {
      const newErrors: {
          firstName: string;
          email: string;
          phone: string;
          preferredDate: string;
          preferredTime: string;
      } = {
          firstName: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
      };
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.preferredDate)
      newErrors.preferredDate = "Preferred date is required.";
    if (!formData.preferredTime)
      newErrors.preferredTime = "Preferred time is required.";
    // if (!formData.termsAccepted)
    //   newErrors.termsAccepted = "You must accept the terms and conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredTime: value,
    }));
    setErrors((prev) => ({ ...prev, preferredTime: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Appointment booked successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          // termsAccepted: false,
        });
      } else {
        setMessage(result.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <Image
          src="/images/book-appointment.jpg"
          alt="Dental clinic reception"
          fill
          className="object-cover brightness-[0.95]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30"></div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-screen-2xl px-5 md:px-10 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Get In Touch
              </h2>
              <p className="mb-8 text-gray-600">
                Whether you&apos;re a new patient or a returning one, we&apos;re
                here to help you with any questions or concerns. Feel free to
                reach out to us using any of the methods below.
              </p>

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

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold">Book an Appointment</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-md" htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="h-12"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-md" htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-md" htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-md" htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-md" htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="h-12"
                    />
                    {errors.preferredDate && (
                      <p className="text-sm text-red-600">
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-md" htmlFor="preferredTime">Preferred Time</Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.preferredTime}
                    >
                      <SelectTrigger id="preferredTime" className="py-6">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          Morning (8AM - 12PM)
                        </SelectItem>
                        <SelectItem value="afternoon">
                          Afternoon (12PM - 4PM)
                        </SelectItem>
                        <SelectItem value="evening">
                          Evening (4PM - 6PM)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.preferredTime && (
                      <p className="text-sm text-red-600">
                        {errors.preferredTime}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12"
                  disabled={loading}
                >
                  {loading ? "Booking..." : "Book Appointment"}
                </Button>
              </form>
              {message && (
                <p
                  className={`mt-4 text-center ${
                    message.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}






// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";

// export default function Appointment() {
// const [formData, setFormData] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   preferredDate: "",
//   preferredTime: "",
//   // termsAccepted: false,
// });

// const [errors, setErrors] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   preferredDate: "",
//   preferredTime: "",
//   // termsAccepted: "",
// });

// const [loading, setLoading] = useState(false);
// const [message, setMessage] = useState("");

// const validateForm = () => {
//   const newErrors: any = {};
//   if (!formData.firstName) newErrors.firstName = "First name is required.";
//   if (!formData.lastName) newErrors.lastName = "Last name is required.";
//   if (!formData.email) newErrors.email = "Email is required.";
//   else if (!/\S+@\S+\.\S+/.test(formData.email))
//     newErrors.email = "Invalid email address.";
//   if (!formData.phone) newErrors.phone = "Phone number is required.";
//   else if (!/^\d{10}$/.test(formData.phone))
//     newErrors.phone = "Phone number must be 10 digits.";
//   if (!formData.preferredDate)
//     newErrors.preferredDate = "Preferred date is required.";
//   if (!formData.preferredTime)
//     newErrors.preferredTime = "Preferred time is required.";
//   // if (!formData.termsAccepted)
//   //   newErrors.termsAccepted = "You must accept the terms and conditions.";

//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { id, value, type, checked } = e.target;
//   setFormData((prev) => ({
//     ...prev,
//     [id]: type === "checkbox" ? checked : value,
//   }));
//   setErrors((prev) => ({ ...prev, [id]: "" }));
// };

// const handleSelectChange = (value: string) => {
//   setFormData((prev) => ({
//     ...prev,
//     preferredTime: value,
//   }));
//   setErrors((prev) => ({ ...prev, preferredTime: "" }));
// };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   if (!validateForm()) return;

//   setLoading(true);
//   setMessage("");

//   try {
//     const response = await fetch("/api/appointment", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       setMessage("Appointment booked successfully!");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         preferredDate: "",
//         preferredTime: "",
//         // termsAccepted: false,
//       });
//     } else {
//       setMessage(result.message || "Failed to book appointment.");
//     }
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     setMessage("An error occurred. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <main className="flex min-h-screen flex-col">
//       <section className="py-16">
//         <div className="max-w-screen-2xl px-5 md:px-10 mx-auto grid md:grid-cols-2 items-center">
//           {/* Image Section */}
//           <div className="relative h-[550px] w-full overflow-hidden">
//             <Image
//               src="/images/book-appointment.jpg"
//               alt="Dental clinic reception"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Form Section */}
//           <div className="rounded-lg bg-white p-8 shadow-lg">
//             <h2 className="mb-6 text-3xl font-bold">Book an Appointment</h2>
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div>
//                   <Label htmlFor="firstName">First Name</Label>
//                   <Input
//                     id="firstName"
//                     placeholder="Enter your first name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="h-12"
//                   />
//                   {errors.firstName && (
//                     <p className="text-sm text-red-600">{errors.firstName}</p>
//                   )}
//                 </div>
//                 <div>
//                   <Label htmlFor="lastName">Last Name</Label>
//                   <Input
//                     id="lastName"
//                     placeholder="Enter your last name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="h-12"
//                   />
//                   {errors.lastName && (
//                     <p className="text-sm text-red-600">{errors.lastName}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="h-12"
//                 />
//                 {errors.email && (
//                   <p className="text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="h-12"
//                 />
//                 {errors.phone && (
//                   <p className="text-sm text-red-600">{errors.phone}</p>
//                 )}
//               </div>

//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div>
//                   <Label htmlFor="preferredDate">Preferred Date</Label>
//                   <Input
//                     id="preferredDate"
//                     type="date"
//                     value={formData.preferredDate}
//                     onChange={handleChange}
//                     className="h-12"
//                   />
//                   {errors.preferredDate && (
//                     <p className="text-sm text-red-600">
//                       {errors.preferredDate}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <Label htmlFor="preferredTime">Preferred Time</Label>
//                   <Select
//                     onValueChange={handleSelectChange}
//                     value={formData.preferredTime}
//                   >
//                     <SelectTrigger id="preferredTime" className="h-12">
//                       <SelectValue placeholder="Select a time" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="morning">
//                         Morning (8AM - 12PM)
//                       </SelectItem>
//                       <SelectItem value="afternoon">
//                         Afternoon (12PM - 4PM)
//                       </SelectItem>
//                       <SelectItem value="evening">
//                         Evening (4PM - 6PM)
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                   {errors.preferredTime && (
//                     <p className="text-sm text-red-600">
//                       {errors.preferredTime}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="flex items-start space-x-2">
//                 <Checkbox
//                   id="termsAccepted"
//                   checked={formData.termsAccepted}
//                   onChange={handleChange}
//                 />
//                 <Label htmlFor="termsAccepted" className="text-sm">
//                   I agree to the{" "}
//                   <Link href="/terms" className="text-blue-600 hover:underline">
//                     terms and conditions
//                   </Link>
//                 </Label>
//               </div>
//               {errors.termsAccepted && (
//                 <p className="text-sm text-red-600">{errors.termsAccepted}</p>
//               )}

//               <Button type="submit" className="w-full h-12" disabled={loading}>
//                 {loading ? "Booking..." : "Book Appointment"}
//               </Button>
//             </form>
//             {message && (
//               <p
//                 className={`mt-4 text-center ${
//                   message.includes("successfully")
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 {message}
//               </p>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
