import { z } from "zod"

export const appointmentSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  preferredDate: z.string().refine(
    (date) => {
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return selectedDate >= today
    },
    { message: "Date must be today or in the future" },
  ),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    errorMap: () => ({ message: "Please select a preferred time" }),
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
})

export type AppointmentFormValues = z.infer<typeof appointmentSchema>
