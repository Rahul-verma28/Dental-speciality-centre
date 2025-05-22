import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body

    // Validate required fields
    if (!firstName || !email || !phone || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Send email
    await sendContactEmail({
      email,
      firstName,
      lastName,
      phone,
      message,
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error in contact route:", error)
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 })
  }
}
