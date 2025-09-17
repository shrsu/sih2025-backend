const express = require('express');
const cors = require('cors');
const Call = require('./models/Call');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));
const app = express();
app.use(cors());
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, Express is running!');
});

app.get('/calls/completed', async (req, res) => {
  try {
    const completedCalls = await Call.find({ status: 'completed' });
    res.json(completedCalls);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch completed calls', details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Express app listening`);
});
