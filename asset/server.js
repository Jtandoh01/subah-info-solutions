require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const { MONGODB_URI } = process.env; // Retrieve environment variable to vercel


const studentRoutes = require('../routes/student');

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
app.get('/students/:studentId', (req, res) => {
  // Implementation to retrieve student details
  res.status(200).send('HELLO, YOUR STUDENT ID IS: '+ req.params.studentId);
});

// Endpoint to register new student
app.post('/students', (req, res) => {
  // Implementation to register new student
  res.status(200).send('HELLO, YOU ARE ASSIGNED THE STUDENT ID ' + req.body.studentId+', ' +' CONGRATULATIONS.');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
