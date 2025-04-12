import { type NextRequest, NextResponse } from "next/server";
import Appointment from "@/lib/models/Appointment";
import { sendAppointmentEmail } from "@/lib/email";
import { connectToDB } from "@/lib/mongoDB";

export async function POST(request: NextRequest) {
  try {
    // Connect to the database
    await connectToDB();

    // Parse the request body
    const body = await request.json();

    // Expected body structure
    const {
      firstName,
      lastName,
      email,
      phone,
      preferredDate,
      preferredTime,
      termsAccepted,
    } = body;

    // Ensure required fields are present
    if (
      !firstName ||
      !email ||
      !phone ||
      !preferredDate ||
      !preferredTime ||
      termsAccepted !== true
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields or terms not accepted",
        },
        { status: 400 }
      );
    }
    console.log("Received appointment data:", body);

    // Create a new appointment in the database
    const appointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      preferredDate,
      preferredTime,
      termsAccepted,
    });

    console.log("Appointment created:", appointment);
    // Send confirmation email to the patient
    await sendAppointmentEmail({
      email: appointment.email,
      firstName: appointment.firstName,
      lastName: appointment.lastName,
      preferredDate: appointment.preferredDate.toISOString(),
      preferredTime: appointment.preferredTime,
      phone: appointment.phone,
    });
    console.log("Confirmation email sent to:", appointment.email);

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully",
      appointment: appointment,
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to book appointment",
      },
      { status: 500 }
    );
  }
}