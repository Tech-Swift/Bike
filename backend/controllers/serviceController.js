// controllers/serviceController.js
const ServiceRequest = require('../models/Service');

exports.requestService = async (req, res) => {
  const request = new ServiceRequest({ ...req.body, user: req.user._id });
  await request.save();
  res.status(201).json(request);
};

exports.getMyServices = async (req, res) => {
  const requests = await ServiceRequest.find({ user: req.user._id });
  res.json(requests);
};

exports.getAllServices = async (req, res) => {
  const requests = await ServiceRequest.find();
  res.json(requests);
};