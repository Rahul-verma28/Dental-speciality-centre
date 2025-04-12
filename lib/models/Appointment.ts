import mongoose, { Schema, type Document } from "mongoose"

export interface IAppointment extends Document {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredDate: Date
  preferredTime: string
  termsAccepted: boolean
  createdAt: Date
}

const AppointmentSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    // required: [true, "Last name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
  },
  preferredDate: {
    type: Date,
    required: [true, "Preferred date is required"],
  },
  preferredTime: {
    type: String,
    required: [true, "Preferred time is required"],
    enum: ["morning", "afternoon", "evening"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Appointment || mongoose.model<IAppointment>("Appointment", AppointmentSchema)
