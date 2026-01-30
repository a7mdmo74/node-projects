const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function convertLength(value, from, to) {
  const meters = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
  };

  return (value * meters[from]) / meters[to];
}

function convertWeight(value, from, to) {
  const grams = {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592,
  };

  return (value * grams[from]) / grams[to];
}

function convertTemperature(value, from, to) {
  if (from === to) return value;

  let celsius;

  if (from === "fahrenheit") celsius = ((value - 32) * 5) / 9;
  else if (from === "kelvin") celsius = value - 273.15;
  else celsius = value;

  if (to === "fahrenheit") return (celsius * 9) / 5 + 32;
  if (to === "kelvin") return celsius + 273.15;

  return celsius;
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/length", (req, res) => {
  res.sendFile(path.join(__dirname, "views/length.html"));
});

app.get("/weight", (req, res) => {
  res.sendFile(path.join(__dirname, "views/weight.html"));
});

app.get("/temperature", (req, res) => {
  res.sendFile(path.join(__dirname, "views/temperature.html"));
});

app.post("/length", (req, res) => {
  const { value, from, to } = req.body;
  const result = convertLength(Number(value), from, to);
  res.send(`<h1>Result: \${result}</h1><a href="/length">Back</a>`);
});

app.post("/weight", (req, res) => {
  const { value, from, to } = req.body;
  const result = convertWeight(Number(value), from, to);
  res.send(`<h1>Result: \${result}</h1><a href="/weight">Back</a>`);
});

app.post("/temperature", (req, res) => {
  const { value, from, to } = req.body;
  const result = convertTemperature(Number(value), from, to);
  res.send(`<h1>Result: \${result}</h1><a href="/temperature">Back</a>`);
});

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
