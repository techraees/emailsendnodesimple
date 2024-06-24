const nodemailer = require("nodemailer");

const sendEmail = async ({ options: { email, subject, text, html } }) => {
  try {
    console.log(email);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 535,
      secure: true,
      secureConnection: false,
      auth: {
        user: "cartraderpakistan@gmail.com",
        pass: "fswwpbvweqxptaqf",
      },
      tls: { rejectUnAuthorized: true },
    });

    await transporter.sendMail({
      from: "cartraderpakistan@gmail.com",
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
