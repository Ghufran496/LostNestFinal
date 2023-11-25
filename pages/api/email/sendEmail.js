//https://www.youtube.com/watch?v=-qQjyxbla-k
//--------https://www.youtube.com/watch?v=t2LvPXHLrek
//https://www.youtube.com/watch?v=t2LvPXHLrek&t=1s
/*const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";

import { fetchallemails } from "../../../lib/db";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { subject, message } = req.body;
  const session = await getSession({ req: req });

  const emailsender = session.user.email;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gcch1122@gmail.com",
      pass: "1a08b1992c",
    },
  });

  if (!subject || !message) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  //const to = await fetchallemails();
  const to = (await fetchallemails()).map((user) => user.email);

  let mailOptions = {
    from: emailsender,
    to: to,
    subject: subject,
    text: message,
  };
  try {
    const result = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}*/
const nodemailer = require("nodemailer");
//https://mailtrap.io/inboxes/2499902/messages/3867662540
import { fetchallemails } from "../../../lib/db";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { subject, message } = req.body;
  const session = await getSession({ req: req });

  const emailsender = session.user.email;

  if (!subject || !message) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  // const transporter = nodemailer.createTransport({
  //   port: 587,
  //   secure: false,
  //   host: "sandbox.smtp.mailtrap.io",
  //   auth: {
  //     user: "6bb4922c65d9b2",
  //     pass: "1e9e125d684fac",
  //   },
  // });
  const transporter = nodemailer.createTransport({
    port: process.env.smtp_port,
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


// api/sendEmail.js
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
//import { fetchallemails } from "../../../lib/db";
//import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { subject, message } = req.body;
  //const session = await getSession({ req: req });

  //const emailsender = session.user.email;

  if (!subject || !message) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  //   const apikey =
  //     "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";

  sgMail.setApiKey(SG_API_KEY);

  //const to = await fetchallemails();
  //const to = (await fetchallemails()).map((user) => user.email);
  console.log(SG_API_KEY);
  const msg = {
    to: FROM_EMAIL, // Ensure to is an array
    from: FROM_EMAIL, // Replace with your verified SendGrid email
    subject,
    text: message,
  };

  console.log(msg);

  try {
    const reslt = await sgMail.send(msg);
    console.log(reslt + "send it");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
*/
