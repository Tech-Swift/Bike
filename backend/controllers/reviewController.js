// controllers/reviewController.js
const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const review = new Review({ ...req.body, user: req.user._id });
  await review.save();
  res.status(201).json(review);
};

exports.getBikeReviews = async (req, res) => {
  const reviews = await Review.find({ bike: req.params.bikeId });
  res.json(reviews);
};