import type { NextApiRequest, NextApiResponse } from 'next';
require('dotenv').config();
const nodemailer = require('nodemailer');

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
  secure: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    let submitted_name = req.body.name;
    let submitted_email = req.body.email;
    let submitted_subject = req.body.subject;
    let submitted_message = req.body.message;

    const data = {
      from: submitted_email,
      to: EMAIL,
      subject: submitted_subject,
      text: submitted_message,
      html: `
        <p style="font-size:20px">Sent from: ${submitted_email} (${submitted_name})</p>
        <div style="font-size:16px">${submitted_message}</div>
        <hr />
        <footer style="text-align:center">Received this email from my own website</footer>
        `,
    };

    transporter.sendMail(data, function (err: any, success: any) {
      if (err) {
        res.status(403).json({ message: "Couldn't send email" });
      }

      if (success) {
        res.status(200).json({ message: 'Email sent' });
      }
    });
  } else {
    res.status(405).send('METHOD GET NOT ALLOWED');
  }
}
