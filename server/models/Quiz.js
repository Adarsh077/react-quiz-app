const mongoose = require("mongoose");

const QuestionsSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: Number,
    required: true,
  },
  options: [String],
});

const QuizSchema = mongoose.Schema({
  questions: [QuestionsSchema],
});

module.exports = mongoose.model("quiz", QuizSchema);
