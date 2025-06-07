const express = require('express');
const router = express.Router();
const { requestService, getMyServices, getAllServices } = require('../controllers/serviceController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Buyer: Request service, view their own
router.post('/', protect, requestService);
router.get('/my', protect, getMyServices);

// Admin/Technician: View all service requests
router.get('/all', protect, adminOnly, getAllServices);

module.exports = router;
