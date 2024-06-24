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
  const { email, subject, username, html } = req.body;
  if (!email || !subject || !username || !html) {
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
      return res.status(400).json({ status: "fail" });
    }
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error occurred while sending email", error.message);
    res.status(500).send("Error sending email");
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
