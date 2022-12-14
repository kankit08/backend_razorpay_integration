require("dotenv").config();
const Razorpay = require("razorpay");
const express = require("express");
const app = express();
app.use(express.static("./public"));
app.use(express.json());
const { v4: uuidv4 } = require("uuid");

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Razorpay Payment Gateway");
});

app.post("/order", async (req, res) => {
  const amount = req.body.amount;

  //Razopray
  var instance = new Razorpay({
    key_id: process.env.key_id,
    key_secret: process.env.key_secret,
  });
  var options = {
    amount: amount * 100,
    currency: "INR",
    receipt: uuidv4(),
  };
  const myOrder = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    amount,
    order: myOrder,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
