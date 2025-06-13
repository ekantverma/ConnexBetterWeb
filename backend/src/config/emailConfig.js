const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",    // better than `service: "gmail"`
  port: 465,                 // SSL port
  secure: true,              // true for 465, false for 587
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify().then(() => {
  console.log("📧  Mail server ready");
}).catch(console.error);

module.exports = transporter;
