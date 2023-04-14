require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const  MONGODB_URI  = process.env; 
const http = require('http');


const studentRoutes = require('./route/studentRoutes');

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Middleware to parse request body as JSON
app.use(express.json());

// Endpoint to retrieve student details by ID
app.get('./student', (req, res) => {
  // Implementation to retrieve student details
  return res.status(200).send(id);
});
  

// Endpoint to register new student
app.post('./student', (req, res) => {
  // Implementation to register new student
 return res.status(200).json().send();
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on  http://localhost:${port}`));
