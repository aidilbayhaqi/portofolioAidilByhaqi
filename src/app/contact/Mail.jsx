import nodemailer from "nodemailer";
import React from "react";

const Mail = async(req, res) =>{
  if (req.method === "POST") {
    const { name, email, company, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port:465,
      secure:true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
       from: `${name} <${email}>`,
      to: process.env.EMAIL_USER, // Replace with your recipient email
      subject: 'Contact Form Submission from Portfolio',
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company} (optional)
        Message: ${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default Mail