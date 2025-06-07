// controllers/paymentController.js
const Payment = require('../models/Payment');

exports.makePayment = async (req, res) => {
  const payment = new Payment({ ...req.body, user: req.user._id });
  await payment.save();
  res.status(201).json(payment);
};

exports.getPayment = async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  res.json(payment);
};