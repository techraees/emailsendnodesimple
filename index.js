// app.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const sendEmail = require("./sendEmail");
const resetPasswordTemplateForDeletion = require("./resetPasswordTemplateForDeletion");
const resetPasswordTemplateForOTP = require("./resetPasswordTemplateForOTP");
const cors = require("cors");

const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://check.cartraderpk.com",
  })
);

// Endpoint to send emails
app.post("/send", async (req, res) => {
  console.log(req.body);
  let { email, subject, username, text } = req.body;
  if (!email || !subject || !username) {
    return res
      .status(400)
      .json({ status: "fail", message: "Validate Req Body" });
  }

  try {
    // Sending Email To Email
    const emailSuccess = await sendEmail({
      options: {
        email,
        subject: "Deletion AC Request",
        text: "Deletion AC Request",
        html: resetPasswordTemplateForDeletion(username),
      },
    });

    if (!emailSuccess) {
      return res
        .status(400)
        .json({ status: "fail", message: "Error While Sending Email" });
    }
    return res.status(200).json({
      status: "success",
      message: "Deleted Successfully",
      mail: "Mail Send Successfully",
    });
  } catch (error) {
    return res.status(200).json({
      status: "fail",
      message: "Error While Email Send",
      mail: "Error While Email Send",
    });
    console.log(error)
    console.error("Error occurred while sending email", error.message);
  }
});


// Endpoint to send emails
app.post("/sendotp", async (req, res) => {
  let { email, subject, otp, text } = req.body;
  if (!email || !subject || !otp) {
    return res
      .status(400)
      .json({ status: "fail", message: "Validate Req Body" });
  }

  try {
    // Sending Email To Email
    const emailSuccess = await sendEmail({
      options: {
        email,
        subject: "OTP Car Trader Pk",
        text: "OTP Car Trader Pk",
        html: resetPasswordTemplateForOTP(otp),

      },
    });

    if (!emailSuccess) {
      return res
        .status(400)
        .json({ status: "fail", message: "Error While Sending Email" });
    }
    return res.status(200).json({
      status: "success",
      message: "Email send Successfully",
      mail: "Mail Send Successfully",
    });
  } catch (error) {
    return res.status(200).json({
      status: "fail",
      message: "Error While Email Send",
      mail: "Error While Email Send",
    });
    console.log(error)
    console.error("Error occurred while sending email", error.message);
  }
});
// Endpoint to send emails
app.get("/", async (req, res) => {
  return res
    .status(200)
    .json({ status: "success", message: "APP is running successfully!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
