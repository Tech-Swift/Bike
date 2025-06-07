const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bike',
    required: true,
  },
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // who requested service (buyer or staff)
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // technician assigned
  },
  issueDescription: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'cancelled'],
    default: 'pending',
  },
  resolutionNotes: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
