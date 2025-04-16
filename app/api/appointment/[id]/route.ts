import { type NextRequest, NextResponse } from "next/server";
import Appointment, { AppointmentStatus } from "@/lib/models/Appointment";
import { connectToDB } from "@/lib/mongoDB";

// GET a single appointment by ID
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;

    await connectToDB();

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    console.error("Error fetching appointment:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch appointment",
      },
      { status: 500 }
    );
  }
}

// PATCH to update appointment status
export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;

    await connectToDB();

    const body = await request.json();
    const { status } = body;

    // Validate status
    if (
      status &&
      !Object.values(AppointmentStatus).includes(status as AppointmentStatus)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid status value",
        },
        { status: 400 }
      );
    }

    // Find and update the appointment
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      {
        ...(status && { status }),
        // ...(notes !== undefined && { notes }),
      },
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedAppointment,
    });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update appointment",
      },
      { status: 500 }
    );
  }
}

// DELETE an appointment
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;

    await connectToDB();

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete appointment",
      },
      { status: 500 }
    );
  }
}
