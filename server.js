const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

// Sample API route
app.get('/', (req, res) => {
  res.send('Hello from Node API Server!');
});

// Example POST route
app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Received:', data);
  res.json({ message: 'Data received', data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
