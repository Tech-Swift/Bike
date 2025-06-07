const express = require('express');
const router = express.Router();
const { makePayment, getPayment } = require('../controllers/paymentController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Buyer: Make payment & view
router.post('/', protect, makePayment);
router.get('/:id', protect, getPayment);

module.exports = router;
