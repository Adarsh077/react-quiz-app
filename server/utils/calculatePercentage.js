console.clear();
const QuizModel = require("../models/Quiz");

const calculatePercentage = async (answers) => {
  let questions = await QuizModel.findById("5f05ab2bbbc2c86a3dae55fc");
  questions = questions.questions;

  let totalPerc = 0;
  const wrongAnswers = [];
  const percentagePerQuestion = 100 / questions.length;

  questions.forEach((question) => {
    const idx = answers.findIndex(
      (answer) => answer._id === question._id.toString()
    );
    if (idx === -1) {
      return wrongAnswers.push({
        _id: question._id,
        answer: question.options[question.answer],
      });
    }

    if (question.options[question.answer] === answers[idx].answer) {
      totalPerc += percentagePerQuestion;
    } else {
      wrongAnswers.push({
        _id: question._id,
        answer: question.options[question.answer],
      });
    }
  });
  return { percentage: Math.round(totalPerc), wrongAnswers };
};

module.exports = calculatePercentage;
