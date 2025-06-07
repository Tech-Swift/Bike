// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import your routes here
const authRoutes = require('./routes/authRoutes'); // <-- Add this line
const userRoutes = require('./routes/userRoutes'); // <-- Add this line (for role update etc.)
const bikeRoutes = require('./routes/bikeRoutes'); // <-- Add this line (for bike-related routes)
const orderRoutes = require('./routes/orderRoutes'); // <-- Add this line (for order-related routes)
const paymentRoutes = require('./routes/paymentRoutes'); // <-- Add this line (for payment-related routes)
const reviewRoutes = require('./routes/reviewRoutes'); // <-- Add this line (for review-related routes)
const notificationRoutes = require('./routes/notificationRoutes'); // <-- Add this line (for notification-related routes)
const serviceRoutes = require('./routes/serviceRoutes'); // <-- Add this line (for service-related routes)
 

// Define a test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

console.log('authRoutes:', authRoutes);
// Use your routes here
app.use('/api/auth', authRoutes);    // <-- Add this line
app.use('/api/users', userRoutes);   // <-- Add this line (protected routes for users)
app.use('/api/bikes', bikeRoutes); // <-- Add this line (for bike-related routes)
app.use('/api/orders', orderRoutes); // <-- Add this line (for order-related routes)
app.use('/api/payments', paymentRoutes); // <-- Add this line (for payment-related routes)
app.use('/api/reviews', reviewRoutes); // <-- Add this line (for review-related routes)
app.use('/api/notifications', notificationRoutes); // <-- Add this line (for notification-related routes)
app.use('/api/services', serviceRoutes); // <-- Add this line (for service-related routes)
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
