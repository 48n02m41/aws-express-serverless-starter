const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes

app.get("/", (req, res) => {
  res.status(200).send("API confirmed working!");
});

app.get("/time", (req, res) => {
  let timeNow = Date(Date.now());
  res.status(200).send(timeNow.toString());
});

app.post("/logthis", (req, res) => {
  const name = req.body.name;
  const toLog = `\n >>> My name is ${name} <<< \n`;
  console.info(toLog);
  res.status(200).send(toLog);
});

module.exports = app;
