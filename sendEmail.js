const nodemailer = require("nodemailer");

const sendEmail = async ({ options: { email, subject, text, html } }) => {
  try {
    console.log(email)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'gmail',
      port: 535,
      secure: true,
      secureConnection: false,
      auth: {
        user: 'cartraderpakistan@gmail.com',
        pass: 'fswwpbvweqxptaqf',
      },
      tls: { rejectUnAuthorized: true },
    });

    await transporter.sendMail({
      from: 'cartraderpakistan@gmail.com',
      to: email,
      subject: subject,
      text: text,
      html: html,
    });
    console.log("email sent successfully");
    return true
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return false
    return error;
  }
};


module.exports = sendEmail;