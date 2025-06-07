// controllers/orderController.js
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const order = new Order({ ...req.body, user: req.user._id });
  await order.save();
  res.status(201).json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
};
exports.updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
};