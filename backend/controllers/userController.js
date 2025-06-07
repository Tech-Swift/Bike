const User = require('../models/User');

// Get all users (admin only)
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update user role (admin only)
const updateUserRole = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { role } = req.body;
    if (!role) return res.status(400).json({ message: 'Role is required' });

    user.role = role;
    await user.save();

    res.json({ message: 'User role updated', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUsers, updateUserRole };
