const express = require('express');
const router = express.Router();

const { registerUser, updateUserRole, getUsers } = require('../controllers/userController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

console.log('protect:', typeof protect);
console.log('adminOnly:', typeof adminOnly);
console.log('getUsers:', typeof getUsers);

// Get all users (admin only)
router.get('/', protect, adminOnly, getUsers);

router.get('/test', (req, res) => {
  res.json({ message: 'User route is working' });
});

// Update user role by admin
router.put('/role/:id', protect, adminOnly, updateUserRole);
router.post('/register', registerUser);

module.exports = router;
