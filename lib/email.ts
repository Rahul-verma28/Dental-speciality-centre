import nodemailer from "nodemailer";

interface SendContactEmailParams {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}

export const sendContactEmail = async ({
  email,
  firstName,
  lastName,
  phone,
  message,
}: SendContactEmailParams) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT), // 465 or 587
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: `${process.env.EMAIL_FROM}`,
      cc: `${email}`, // Send a copy to the person who submitted the form
      subject: "New Contact Form Submission - Dental & Aesthetic Care Centre",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">          
          <h2 style="color: #1a2e4c; text-align: center;">New Contact Form Submission</h2>
          
          <p>A new message has been submitted through the contact form:</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1a2e4c; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>Please respond to this inquiry at your earliest convenience.</p>
          
          <p>Best regards,<br>The Dental & Aesthetic Care Centre Team</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>E-792 Chittaranjan Park, New Delhi<br>Phone: (+91) 1135619736</p>
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

// Export the appointment email function as well
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
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT), // 465 or 587
      secure: true, // true for 465, false for 587
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

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: `${email}, ${process.env.EMAIL_FROM}`,
      subject: "Your Appointment Confirmation - Dental & Aesthetic Care Centre",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">          
          <h2 style="color: #1a2e4c; text-align: center;">Appointment Confirmation</h2>
          
          <p>Dear ${firstName} ${lastName},</p>
          
          <p>Thank you for booking an appointment with Dental & Aesthetic Care Centre. We have received your request and are looking forward to seeing you.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1a2e4c; margin-top: 0;">Appointment Details:</h3>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${preferredTime}</p>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <p>We look forward to providing you with excellent dental care!</p>
          
          <p>Best regards,<br>The Dental & Aesthetic Care Centre Team</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>E-792 Chittaranjan Park, New Delhi<br>Phone: (+91) 1135619736</p>
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
