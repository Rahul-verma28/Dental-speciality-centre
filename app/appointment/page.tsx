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
// import { Label } from "@/components/ui/label";
// import { Facebook, Instagram, Twitter } from "lucide-react";

// export default function Appointment() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     preferredDate: "",
//     preferredTime: "",
//     // termsAccepted: false,
//   });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     // lastName: "",
//     email: "",
//     phone: "",
//     preferredDate: "",
//     preferredTime: "",
//     // termsAccepted: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const validateForm = () => {
//     const newErrors: {
//       firstName: string;
//       email: string;
//       phone: string;
//       preferredDate: string;
//       preferredTime: string;
//     } = {
//       firstName: "",
//       email: "",
//       phone: "",
//       preferredDate: "",
//       preferredTime: "",
//     };
//     if (!formData.firstName) newErrors.firstName = "First name is required.";
//     if (!formData.email) newErrors.email = "Email is required.";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email address.";
//     if (!formData.phone) newErrors.phone = "Phone number is required.";
//     else if (!/^\d{10}$/.test(formData.phone))
//       newErrors.phone = "Phone number must be 10 digits.";
//     if (!formData.preferredDate)
//       newErrors.preferredDate = "Preferred date is required.";
//     if (!formData.preferredTime)
//       newErrors.preferredTime = "Preferred time is required.";
//     // if (!formData.termsAccepted)
//     //   newErrors.termsAccepted = "You must accept the terms and conditions.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id]: type === "checkbox" ? checked : value,
//     }));
//     setErrors((prev) => ({ ...prev, [id]: "" }));
//   };

//   const handleSelectChange = (value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       preferredTime: value,
//     }));
//     setErrors((prev) => ({ ...prev, preferredTime: "" }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("/api/appointment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setMessage("Appointment booked successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           preferredDate: "",
//           preferredTime: "",
//           // termsAccepted: false,
//         });
//       } else {
//         setMessage(result.message || "Failed to book appointment.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setMessage("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

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
//         <div className="absolute inset-0 flex items-center justify-center bg-black/30"></div>
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

//             <div className="rounded-lg bg-white p-8 shadow-lg">
//               <h2 className="mb-6 text-3xl font-bold">Book an Appointment</h2>
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div className="grid gap-6 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <Label className="text-md" htmlFor="firstName">
//                       First Name
//                     </Label>
//                     <Input
//                       id="firstName"
//                       placeholder="Enter your first name"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="h-12"
//                     />
//                     {errors.firstName && (
//                       <p className="text-sm text-red-600">{errors.firstName}</p>
//                     )}
//                   </div>
//                   <div className="space-y-2">
//                     <Label className="text-md" htmlFor="lastName">
//                       Last Name
//                     </Label>
//                     <Input
//                       id="lastName"
//                       placeholder="Enter your last name"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="h-12"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label className="text-md" htmlFor="email">
//                     Email
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="h-12"
//                   />
//                   {errors.email && (
//                     <p className="text-sm text-red-600">{errors.email}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label className="text-md" htmlFor="phone">
//                     Phone
//                   </Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="h-12"
//                   />
//                   {errors.phone && (
//                     <p className="text-sm text-red-600">{errors.phone}</p>
//                   )}
//                 </div>

//                 <div className="grid gap-6 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <Label className="text-md" htmlFor="preferredDate">
//                       Preferred Date
//                     </Label>
//                     <Input
//                       id="preferredDate"
//                       type="date"
//                       value={formData.preferredDate}
//                       onChange={handleChange}
//                       className="h-12"
//                     />
//                     {errors.preferredDate && (
//                       <p className="text-sm text-red-600">
//                         {errors.preferredDate}
//                       </p>
//                     )}
//                   </div>
//                   <div className="space-y-2">
//                     <Label className="text-md" htmlFor="preferredTime">
//                       Preferred Time
//                     </Label>
//                     <Select
//                       onValueChange={handleSelectChange}
//                       value={formData.preferredTime}
//                     >
//                       <SelectTrigger id="preferredTime" className="py-6">
//                         <SelectValue placeholder="Select a time" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="morning">
//                           Morning (8AM - 12PM)
//                         </SelectItem>
//                         <SelectItem value="afternoon">
//                           Afternoon (12PM - 4PM)
//                         </SelectItem>
//                         <SelectItem value="evening">
//                           Evening (4PM - 6PM)
//                         </SelectItem>
//                       </SelectContent>
//                     </Select>
//                     {errors.preferredTime && (
//                       <p className="text-sm text-red-600">
//                         {errors.preferredTime}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full h-12"
//                   disabled={loading}
//                 >
//                   {loading ? "Booking..." : "Book Appointment"}
//                 </Button>
//               </form>
//               {message && (
//                 <p
//                   className={`mt-4 text-center ${
//                     message.includes("successfully")
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Image from "next/image";
import { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Appointment"
}

export default function Appointment() {
  

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
      <AppointmentForm />
    </main>
  );
}

 