require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Razorpay Payment Gateway");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
