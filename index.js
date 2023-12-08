const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const pulseDataRoutes = require('./routes/pulseRoutes');
const connectDB = require('./db/db');
const cors = require('cors');
const { addPulse } = require('./controller/pulseControllers');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
  cors:{
    origin:'https://tally-monitor.onrender.com'
  }
})

// Middleware for JSON parsing
app.use(express.json());
app.use(cors());
connectDB();

// Use pulse data routes
app.use('/api/pulseData', pulseDataRoutes);

// Socket.io connection event
io.on('connection', (socket) => {
  console.log('A user connected');
  // You can handle other socket events or logic here
});

// Handle POST request on a specific route
app.post('/api/pulseData/add', (req, res) => {
  // Assuming you have data in req.body that you want to broadcast
  const dataToBroadcast = req.body;
  addPulse(req,res)
  // Emit a broadcast to all connected clients
  io.emit('userVerificationStats', dataToBroadcast);
  console.log('Broadcast sent successfully');
});

// Start the server
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
