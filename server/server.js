process.stdout.write("\033c");

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const DB_STRING =
  process.env.NODE_ENV === "production"
    ? process.env.DB_STRING
    : process.env.DEV_DB_STRING;

mongoose
  .connect(DB_STRING, {
    dbName: "reactquiz",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database connected to ${DB_STRING}`))
  .catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

var whitelist = ["https://quizappreact.netlify.app/", "http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use("/quiz", cors(corsOptions), require("./routes/quiz"));

app.use(
  (err, req, res, next) =>
    console.log(err) || res.send({ status: "fail", err: err.message })
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => console.log(`Server running on port ${PORT}...`));
