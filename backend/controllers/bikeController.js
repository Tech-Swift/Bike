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
  try {
    const { name, description, price, category, images, quantity } = req.body;

    const bike = new Bike({
      name,
      description,
      price,
      category,
      images,
      quantity,
      seller: req.user._id,
    });

    const savedBike = await bike.save();
    res.status(201).json(savedBike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// controllers/bikeController.js

exports.createMultipleBikes = async (req, res) => {
  try {
    const bikesData = req.body;  // expecting an array of bikes
    if (!Array.isArray(bikesData)) {
      return res.status(400).json({ message: "Expected an array of bikes" });
    }

    // Add seller to each bike object from the authenticated user
    const bikesWithSeller = bikesData.map(bike => ({
      ...bike,
      seller: req.user._id,
    }));

    const insertedBikes = await Bike.insertMany(bikesWithSeller);
    res.status(201).json(insertedBikes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBike = async (req, res) => {
  const bike = await Bike.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bike);
};

exports.deleteBike = async (req, res) => {
  await Bike.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bike deleted' });
};