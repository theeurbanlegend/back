// Example server.js with Mongoose
const express = require('express');
const pulseDataRoutes = require('./routes/pulseRoutes');
const connectDB = require('./db/db');
const cors=require('cors')
require('dotenv').config()
const app = express();

// Middleware for JSON parsing
app.use(express.json());
app.use(cors())
connectDB()

// Use pulse data routes
app.use('/api/pulseData', pulseDataRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
