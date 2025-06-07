const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Mountain', 'Road', 'Electric', 'Hybrid', 'Kids', 'Other'],
    default: 'Other',
  },
  images: [
    {
      url: String,
      public_id: String,
    },
  ],
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quantity: { type: Number, default: 1 },  // <-- New field to track available bikes
  isSold: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Bike', bikeSchema);
