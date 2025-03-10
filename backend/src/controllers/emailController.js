const transporter = require("../config/emailConfig");

exports.sendEmail = async (req, res) => {
  const { name, email, phone, companyname, companysize, intrestproduct, msg } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: "ekantvermaa@gmail.com",
      subject: "New form submission by Connext Better",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${companyname}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company Size:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${companysize}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Interested Product:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${intrestproduct || "Not provided"}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${msg || "Not provided"}</td></tr>
          </table>
        </div>
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
};
