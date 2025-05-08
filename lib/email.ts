import nodemailer from "nodemailer";

interface SendAppointmentEmailParams {
  email: string;
  firstName: string;
  lastName: string;
  preferredDate: string;
  preferredTime: string;
  phone: string;
}

export const sendAppointmentEmail = async ({
  email,
  firstName,
  lastName,
  preferredDate,
  preferredTime,
  phone,
}: SendAppointmentEmailParams) => {
  try {
    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the date
    const formattedDate = new Date(preferredDate).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Format the time slot
    const timeSlot = {
      morning: "Morning (8AM - 12PM)",
      afternoon: "Afternoon (12PM - 4PM)",
      evening: "Evening (4PM - 6PM)",
    }[preferredTime];

    const mailOptions = {
      from: process.env.EMAIL_FROM || "Support@dentalspecialitycentre.in",
      to: `${email}, Support@dentalspecialitycentre.in`, // Send to both patient and admin
      subject: "Your Appointment Confirmation - Dental & Aesthetic Care Centre",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <div style="text-align: center; margin-top: 10px;">
        <img 
          src="https://www.dentalspecialitycentre.in/appointment.jpg" 
          alt="Dental & Aesthetic Care Centre Logo" 
          style="max-width: 200px; height: auto; border-radius: 5px;" 
        />
      </div>
          
          <h2 style="color: #1a2e4c; text-align: center;">Appointment Confirmation</h2>
          
          <p>Dear ${firstName} ${lastName},</p>
          
          <p>Thank you for booking an appointment with Dental & Aesthetic Care Centre. We have received your request and are looking forward to seeing you.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1a2e4c; margin-top: 0;">Appointment Details:</h3>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${timeSlot}</p>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <p>We look forward to providing you with excellent dental care!</p>
          
          <p>Best regards,<br>The Dental & Aesthetic Care Centre Team</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>E-792 Chittaranjan Park, New Delhi<br>Phone: (+91) 7978779649</p>
          </div>
        </div>
      `,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    } else {
      console.log(String(error));
      throw new Error(String(error));
    }
  }
};
