const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Node.js CI/CD Project"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Application is running"
  });
});

app.get("/add/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({
      error: "Invalid numbers"
    });
  }

  return res.status(200).json({
    result: a + b
  });
});

module.exports = app;
