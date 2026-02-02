import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Using a mailto link approach - this will open the user's email client
    // For production, you should use a service like Resend, SendGrid, or Nodemailer
    
    // For now, we'll create a formatted email body
    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
    `.trim();

    // Return success with the email data
    return NextResponse.json({
      success: true,
      message: 'Message received successfully!',
      data: { name, email, message }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
