// //https://www.youtube.com/watch?v=-qQjyxbla-k
// //--------https://www.youtube.com/watch?v=t2LvPXHLrek
// //https://www.youtube.com/watch?v=t2LvPXHLrek&t=1s

// //https://mailtrap.io/inboxes/2499902/messages/3867662540

const nodemailer = require("nodemailer");
import { getServerSession } from "next-auth/next";
import { fetchallemails } from "../../../lib/db";

import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { subject, message } = req.body;

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }


  const emailsender = session.user.email;
//const emailsender = '20-SE-34@students.uettaxila.edu.pk';
  if (!subject || !message) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const transporter = nodemailer.createTransport({
    port: 587,
    secure: false,
    host: process.env.smtp_host,
    auth: {
      user: process.env.smtp_user,
      pass: process.env.smtp_pass,
    },
  });
  const to = (await fetchallemails()).map((user) => user.email);
  // Set up email options
  const mailOptions = {
    from: emailsender,
    to,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

/*

const nodemailer = require("nodemailer");
import { getServerSession } from "next-auth/next";
import { fetchallemails } from "../../../lib/db";

import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { subject, message } = req.body;

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const emailsender = session.user.email;

  if (!subject || !message) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const transporter = nodemailer.createTransport({
    port: 587,
    secure: false,
    host: process.env.smtp_host,
    auth: {
      user: process.env.smtp_user,
      pass: process.env.smtp_pass,
    },
  });
  const to = (await fetchallemails()).map((user) => user.email);
  // Set up email options
  const mailOptions = {
    from: emailsender,
    to,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

*/
