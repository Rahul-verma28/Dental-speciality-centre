import { NextRequest, NextResponse } from "next/server";
import Appointment from "@/lib/models/Appointment";
import { connectToDB } from "@/lib/mongoDB";
import { sendAppointmentEmail } from "@/lib/email";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectToDB();

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return NextResponse.json(
        { success: false, message: "Appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Appointment fetched successfully",
      appointment,
    });
  } catch (error) {
    console.error("Error fetching appointment:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch appointment" },
      { status: 500 }
    );
  }
}


// export async function POST(request: NextRequest) {
//   try {
//     // Connect to the database
//     await connectToDB();

//     // Parse the request body
//     const body = await request.json();

//     // Expected body structure
//     const { firstName, lastName, email, phone, preferredDate, preferredTime } =
//       body;

//     // Ensure required fields are present
//     if (!firstName || !email || !phone || !preferredDate || !preferredTime) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Missing required fields or terms not accepted",
//         },
//         { status: 400 }
//       );
//     }
//     console.log("Received appointment data:", body);

//     // Create a new appointment in the database
//     const appointment = await Appointment.create({
//       firstName,
//       lastName,
//       email,
//       phone,
//       preferredDate,
//       preferredTime,
//     });

//     console.log("Appointment created:", appointment);
//     // Send confirmation email to the patient
//     await sendAppointmentEmail({
//       email: appointment.email,
//       firstName: appointment.firstName,
//       lastName: appointment.lastName,
//       preferredDate: appointment.preferredDate.toISOString(),
//       preferredTime: appointment.preferredTime,
//       phone: appointment.phone,
//     });
//     console.log("Confirmation email sent to:", appointment.email);

//     // Return success response
//     return NextResponse.json({
//       success: true,
//       message: "Appointment booked successfully",
//       // appointment: appointment,
//     });
//   } catch (error) {
//     console.error("Error booking appointment:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to book appointment",
//       },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: NextRequest) {
  try {
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

    // Simulate appointment creation (without saving to the database)
    const appointment = {
      firstName,
      lastName,
      email,
      phone,
      preferredDate: new Date(preferredDate), // Simulate date conversion
      preferredTime,
    };

    console.log("Simulated appointment creation:", appointment);

    // Simulate sending confirmation email to the patient
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
      appointment, // Return the simulated appointment
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