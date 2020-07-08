process.stdout.write("\033c");

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/quiz", require("./routes/quiz"));

app.use((err, req, res, next) =>
  res.send({ status: "fail", err: err.message })
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => console.log(`Server running on port ${PORT}...`));
