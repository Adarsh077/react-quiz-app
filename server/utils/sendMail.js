const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "senghaniadarshkishor@gmail.com",
    pass: "zsdjnnqmzptkfacf",
  },
});

module.exports = (customOptions) =>
  new Promise((resolve, reject) => {
    const mailOptions = {
      from: "Adarsh Senghani",
      ...customOptions,
    };

    transporter.sendMail(mailOptions, (err) => (err ? reject(err) : resolve()));
  });
