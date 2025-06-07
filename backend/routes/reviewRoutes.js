const express = require('express');
const router = express.Router();
const { addReview, getBikeReviews } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

// Public: View reviews
router.get('/:bikeId', getBikeReviews);

// Buyer only: Add review
router.post('/', protect, addReview);

module.exports = router;
