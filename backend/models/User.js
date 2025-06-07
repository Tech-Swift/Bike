const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['buyer', 'finance', 'technician', 'staff', 'agent', 'admin'],
    default: 'buyer'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
