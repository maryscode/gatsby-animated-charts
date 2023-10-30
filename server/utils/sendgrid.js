const sgMail = require('@sendgrid/mail');

if (process.env.NODE_ENV !== "production") {
  // Check for .env file in development
  const dotenv = require("dotenv");
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
}

class SendGridMailer {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  send(subject, text) {
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: subject,
      text: text,
    };

    sgMail.send(msg)
      .then(() => console.log('Email sent successfully'))
      .catch((error) => console.log(`Email send error: ${error}`));
  }
}

module.exports = SendGridMailer;