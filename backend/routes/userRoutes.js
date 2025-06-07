const express = require('express');
const router = express.Router();

const { updateUserRole, getUsers } = require('../controllers/userController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

console.log('protect:', typeof protect);
console.log('adminOnly:', typeof adminOnly);
console.log('getUsers:', typeof getUsers);

// Get all users (admin only)
router.get('/users', protect, adminOnly, getUsers);

// Update user role by admin
router.put('/role/:id', protect, adminOnly, updateUserRole);

module.exports = router;
