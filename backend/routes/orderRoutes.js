const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrder } = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Buyer: Place and view orders
router.post('/', protect, createOrder);
router.get('/', protect, getOrders);
router.get('/:id', protect, getOrder);

module.exports = router;
