const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send('Welcome to the Remote Collaborative Creativity Platform!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});