// app.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const sendEmail = require("./sendEmail");
const resetPasswordTemplateForDeletion = require("./resetPasswordTemplateForDeletion");

const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to send emails
app.post("/send", async (req, res) => {
  let { email, subject, username, text } = req.body;
  email = "techraees786@gmail.com";
  subject = "Account Deletion Error";
  text = "Deletion";
  username = "techraees";
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
        subject,
        text,
        html: resetPasswordTemplateForDeletion(username),
      },
    });

    if (!emailSuccess) {
      return res
        .status(400)
        .json({ status: "fail", message: "Error While Sending Email" });
    }
    res.status(200).json({
      status: "success",
      message: "Deleted Successfully",
      mail: "Mail Send Successfully",
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "Error While Email Send",
      mail: "Error While Email Send",
    });
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
