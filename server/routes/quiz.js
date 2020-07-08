const Router = require("express").Router();
const QuizModel = require("../models/Quiz");
const calculatePerc = require("../utils/calculatePercentage");
const sendMail = require("../utils/sendMail");
const generateCertificate = require("../utils/generatePdf");

Router.get("/", async (req, res, next) => {
  try {
    const quiz = await QuizModel.findById("5f05ab2bbbc2c86a3dae55fc").select(
      "-questions.answer"
    );
    res.send({
      status: "success",
      questions: quiz,
    });
  } catch (e) {
    next(e, req, res);
  }
});

Router.post("/", async (req, res, next) => {
  try {
    const { answers, name, email } = req.body;
    if (!answers || !name || !email)
      throw new Error("Answer, name, email is required");

    const perc = await calculatePerc(answers);
    generateCertificate(name, perc)
      .then(async (stream) => {
        const mailOptions = {
          to: email,
          subject: "React Quiz Certificate",
          attachments: [
            {
              filename: `${name}.pdf`,
              content: stream,
            },
          ],
        };

        await sendMail(mailOptions);
        res.send({
          status: "success",
          data: "Mail sent",
        });
      })
      .catch((err) => next(err, req, res));
  } catch (e) {
    next(e, req, res);
  }
});

module.exports = Router;
