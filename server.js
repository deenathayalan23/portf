import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Optional: CORS support
import cors from 'cors';
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from ES Module Node API Server!');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Received:', data);
  res.json({ message: 'Data received', data });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
