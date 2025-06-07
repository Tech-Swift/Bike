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

// Define a test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

console.log('authRoutes:', authRoutes);
// Use your routes here
app.use('/api/auth', authRoutes);    // <-- Add this line
app.use('/api/users', userRoutes);   // <-- Add this line (protected routes for users)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
