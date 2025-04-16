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

"use client";

import { useState } from "react";
import Image from "next/image";
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
import { isSunday, format, addMonths } from "date-fns";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Appointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validateForm = () => {
    // Reset errors before validation
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

    // Validate each field
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.preferredDate)
      newErrors.preferredDate = "Preferred date is required.";
    // Update errors state
    if (!formData.preferredTime)
      newErrors.preferredTime = "Preferred time is required.";

    setErrors(newErrors);
    console.log("Validation errors:", newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).every(
      (key) => newErrors[key as keyof typeof newErrors] === ""
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);

    // Calculate the minimum and maximum allowed dates
    const today = new Date();
    const minDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const maxDate = new Date(
      addMonths(today, 1).getFullYear(),
      addMonths(today, 1).getMonth(),
      today.getDate()
    );

    // Check if the selected date is within the allowed range
    if (selectedDate < minDate || selectedDate > maxDate) {
      setErrors((prev) => ({
        ...prev,
        preferredDate: `Please select a date between ${format(
          minDate,
          "yyyy-MM-dd"
        )} and ${format(maxDate, "yyyy-MM-dd")}.`,
      }));
      setFormData((prev) => ({ ...prev, preferredDate: "" }));
      return;
    }

    // Check if the selected date is a Sunday
    if (isSunday(selectedDate)) {
      setErrors((prev) => ({
        ...prev,
        preferredDate: "Sundays are not available for appointments.",
      }));
      setFormData((prev) => ({ ...prev, preferredDate: "" }));
      return;
    }

    // Clear errors and set the selected date
    setErrors((prev) => ({ ...prev, preferredDate: "" }));
    setFormData((prev) => ({ ...prev, preferredDate: e.target.value }));
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

    if (!validateForm()) {
      console.log("Form validation failed:", errors); // Debug: Log validation errors
      return;
    }

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

      console.log("API response received:", response); // Debug: Log the raw response object

      const result = await response.json();
      console.log("API response JSON:", result); // Debug: Log the parsed JSON response

      if (response.ok) {
        // setMessage("Appointment booked successfully!");
        toast.success("Appointment booked successfully!"); // Use toast for success message
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
        });
      } else {
        console.error("API error:", result.message || "Unknown error"); // Debug: Log API error message
        setMessage(result.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error during form submission:", error); // Debug: Log any unexpected errors
      // setMessage("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again."); // Use toast for error message
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
      <section className="py-16 light-mode-background-appointments">
        <div className="sm:max-w-screen-lg px-5 md:px-10 mx-auto">
          <div className="rounded-lg bg-transparent">
            <h2 className="mb-20 text-3xl sm:text-5xl font-bold text-center">Book an Appointment</h2>
            <form className="space-y-3 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-md" htmlFor="firstName">
                    First Name
                  </Label>
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
                  <Label className="text-md" htmlFor="lastName">
                    Last Name
                  </Label>
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
                <Label className="text-md" htmlFor="email">
                  Email
                </Label>
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
                <Label className="text-md" htmlFor="phone">
                  Phone
                </Label>
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
                  <Label className="text-md" htmlFor="preferredDate">
                    Preferred Date
                  </Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleDateChange}
                    className="h-12"
                    min={format(new Date(), "yyyy-MM-dd")} // Minimum date is today
                    max={format(addMonths(new Date(), 1), "yyyy-MM-dd")} // Maximum date is the same date next month
                  />
                  {errors.preferredDate && (
                    <p className="text-sm text-red-600">
                      {errors.preferredDate}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="text-md" htmlFor="preferredTime">
                    Preferred Time
                  </Label>
                  <Select
                    onValueChange={handleSelectChange}
                    value={formData.preferredTime}
                  >
                    <SelectTrigger
                      id="preferredTime"
                      className="py-6 w-[200px]"
                    >
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

              {/* <Button
                  className="w-full h-12"
                  >
                  </Button> */}

              <Button
                  type="submit"
                  disabled={loading}
               className="bg-gradient-to-br from-blue-800 to-blue-950 hover:bg-gray-100 text-white  px-10 py-7 text-lg font-semibold rounded-full cursor-pointer">
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
      </section>
    </main>
  );
}
