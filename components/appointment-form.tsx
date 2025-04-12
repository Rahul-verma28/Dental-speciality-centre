// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// // import { zodResolver } from "@hookform/resolvers/zod"
// import { appointmentSchema, type AppointmentFormValues } from "@/lib/validations/appointment"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Link from "next/link"
// import { toast } from "sonner"

// export default function AppointmentForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     setValue,
//     watch,
//   } = useForm<AppointmentFormValues>({
//     // resolver: zodResolver(appointmentSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       preferredDate: "",
//       preferredTime: undefined,
//     //   termsAccepted: false,
//     },
//   })

//   // Need to watch the checkbox value since it's not directly registered
//   const termsAccepted = watch("termsAccepted")

//   // Handle select changes (since react-hook-form doesn't directly support radix-ui selects)
//   const handleSelectChange = (value: string) => {
//     setValue("preferredTime", value as "morning" | "afternoon" | "evening", {
//       shouldValidate: true,
//     })
//   }

//   const onSubmit = async (data: AppointmentFormValues) => {
//     setIsSubmitting(true)

//     try {
//       const response = await fetch("/api/appointments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.message || "Failed to book appointment")
//       }

//       // Show success message
//       toast.success("Your appointment has been successfully booked. Check your email for confirmation.")

//       // Reset the form
//       reset()
//     } catch (error) {
//       console.error("Error booking appointment:", error)

//       // Show error message
//       toast.error("Failed to book your appointment. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="rounded-lg bg-white p-6 shadow-sm">
//       <h2 className="mb-6 text-2xl font-bold">Book an Appointment</h2>
//       <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid gap-4 sm:grid-cols-2">
//           <div className="space-y-2">
//             <Label htmlFor="firstName">First Name</Label>
//             <Input
//               id="firstName"
//               placeholder="Enter your first name"
//               {...register("firstName")}
//               aria-invalid={errors.firstName ? "true" : "false"}
//             />
//             {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="lastName">Last Name</Label>
//             <Input
//               id="lastName"
//               placeholder="Enter your last name"
//               {...register("lastName")}
//               aria-invalid={errors.lastName ? "true" : "false"}
//             />
//             {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
//           </div>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2">
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               {...register("email")}
//               aria-invalid={errors.email ? "true" : "false"}
//             />
//             {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone</Label>
//             <Input
//               id="phone"
//               type="tel"
//               placeholder="Enter your phone number"
//               {...register("phone")}
//               aria-invalid={errors.phone ? "true" : "false"}
//             />
//             {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
//           </div>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2">
//           <div className="space-y-2">
//             <Label htmlFor="preferredDate">Preferred Date</Label>
//             <Input
//               id="preferredDate"
//               type="date"
//               {...register("preferredDate")}
//               aria-invalid={errors.preferredDate ? "true" : "false"}
//             />
//             {errors.preferredDate && <p className="text-sm text-red-500">{errors.preferredDate.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="preferredTime">Preferred Time</Label>
//             <Select onValueChange={handleSelectChange}>
//               <SelectTrigger id="preferredTime">
//                 <SelectValue placeholder="Select a time" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
//                 <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
//                 <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
//               </SelectContent>
//             </Select>
//             {errors.preferredTime && <p className="text-sm text-red-500">{errors.preferredTime.message}</p>}
//           </div>
//         </div>

//         <div className="flex items-start space-x-2">
//           {/* <Checkbox
//             id="termsAccepted"
//             checked={termsAccepted}
//             onCheckedChange={(checked) => {
//               setValue("termsAccepted", checked === true, { shouldValidate: true })
//             }}
//           /> */}
//           <div className="grid gap-1.5 leading-none">
//             <Label
//               htmlFor="termsAccepted"
//               className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             >
//               I agree to the{" "}
//               <Link href="/terms" className="text-blue-600 hover:underline">
//                 terms and conditions
//               </Link>
//             </Label>
//             {errors.termsAccepted && <p className="text-sm text-red-500">{errors.termsAccepted.message}</p>}
//           </div>
//         </div>

//         <Button type="submit" className="w-full" disabled={isSubmitting}>
//           {isSubmitting ? "Booking..." : "Book Appointment"}
//         </Button>
//       </form>
//     </div>
//   )
// }



import React from 'react'

const AppointmentForm = () => {
  return (
    <div>appointmentForm</div>
  )
}

export default AppointmentForm