const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../controllers/authController');

const { protect } = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');

console.log('protect:', typeof protect);
console.log('adminOnly:', typeof adminOnly);
console.log('getAllUsers:', typeof getAllUsers);


router.post('/register', registerUser);
router.post('/login', loginUser);

// Get all users (admin only)
router.get('/users', protect, adminOnly, getAllUsers);

module.exports = router;
