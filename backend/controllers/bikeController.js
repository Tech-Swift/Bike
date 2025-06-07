// controllers/bikeController.js
const Bike = require('../models/Bike');

exports.getAllBikes = async (req, res) => {
  const bikes = await Bike.find();
  res.json(bikes);
};

exports.getBike = async (req, res) => {
  const bike = await Bike.findById(req.params.id);
  res.json(bike);
};

exports.createBike = async (req, res) => {
  const bike = new Bike({ ...req.body, seller: req.user._id });
  await bike.save();
  res.status(201).json(bike);
};

exports.updateBike = async (req, res) => {
  const bike = await Bike.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bike);
};

exports.deleteBike = async (req, res) => {
  await Bike.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bike deleted' });
};