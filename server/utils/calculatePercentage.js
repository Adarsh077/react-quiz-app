console.clear();
const QuizModel = require("../models/Quiz");

const calculatePercentage = async (answers) => {
  let questions = await QuizModel.findById("5f05ab2bbbc2c86a3dae55fc");
  questions = questions.questions;

  let totalPerc = 0;
  const percentagePerQuestion = 100 / questions.length;

  answers.forEach((question) => {
    const idx = questions.findIndex(
      (ques) => ques._id.toString() === question._id
    );

    const answerIdx = questions[idx].answer;
    if (questions[idx].options[answerIdx] === question.answer) {
      totalPerc += percentagePerQuestion;
    }
  });
  return Math.round(totalPerc);
};

module.exports = calculatePercentage;
