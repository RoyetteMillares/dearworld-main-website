"use server";

export async function sendEmail(prevState: any, formData: FormData) {
    // Simulate a delay for the server action
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get("name");
    const email = formData.get("email");
    const organization = formData.get("organization");
    const subject = formData.get("subject");
    const message = formData.get("message");

    console.log("Contact submission received:", { name, email, organization, subject, message });

    // In a real implementation, you would use a service like Resend or SendGrid here.
    return {
        success: true,
        message: "Thank you for your inquiry. We will get back to you shortly.",
    };
}
