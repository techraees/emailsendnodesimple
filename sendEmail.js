const nodemailer = require("nodemailer");

const sendEmail = async ({ options: { email, subject, text, html } }) => {
  try {
    console.log(email);
    const transporter = nodemailer.createTransport({
      host: "mail.cartraderpk.com",
      service: "cartraderpk",
      port: 465, // Use port 465 for secure connections
      secure: true, // Use true for 465, false for 587
      auth: {
        user: "info@cartraderpk.com",
        pass: "+YfD3TVtHIQ0", // Use the App Password here
      },
      tls: { rejectUnauthorized: true },
    });

    await transporter.sendMail({
      from: "info@cartraderpk.com",
      to: email,
      subject: subject,
      text: text,
      html: html,
    });
    console.log("email sent successfully");
    return true;
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return false;
  }
};

// Helper function to safely log errors with circular references
const safeStringify = (obj, space = 2) => {
  const cache = new Set();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (cache.has(value)) {
          return "[Circular]";
        }
        cache.add(value);
      }
      return value;
    },
    space
  );
};

module.exports = sendEmail;
