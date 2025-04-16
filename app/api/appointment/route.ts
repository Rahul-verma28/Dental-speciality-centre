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
    const { firstName, lastName, email, phone, preferredDate, preferredTime } =
      body;

    // Ensure required fields are present
    if (!firstName || !email || !phone || !preferredDate || !preferredTime) {
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

export async function GET(request: NextRequest) {
  try {
    // Connect to the database
    await connectToDB();

    // Fetch all appointments from the database
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });

    console.log("Fetched appointments:", appointments);

    // Return success response with appointments data
    return NextResponse.json({
      success: true,
      message: "Appointments fetched successfully",
      appointments: appointments,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch appointments",
      },
      { status: 500 }
    );
  }
}