const express = require('express');
const router = express.Router();

const {
  createBike,
  getAllBikes,
  getBike,
  updateBike,
  deleteBike,
  createMultipleBikes // <-- add this here
} = require('../controllers/bikeController');

const { protect, adminOnly, staffOrAdmin } = require('../middleware/authMiddleware'); // import staffOrAdmin too

// Public: Get all bikes and single bike
router.get('/', getAllBikes);
router.get('/:id', getBike);

// Seller only: Create, update, delete bike
router.post('/bulk', protect, staffOrAdmin, createMultipleBikes);

router.post('/', protect, createBike); // seller or admin
router.put('/:id', protect, updateBike); // seller or admin
router.delete('/:id', protect, deleteBike); // seller or admin

module.exports = router;
