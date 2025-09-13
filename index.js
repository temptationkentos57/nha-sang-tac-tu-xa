const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Nha Sáng Tác Từ Xa!');
});

app.listen(PORT, () => {
  console.log(`Server is running trên http://localhost:${PORT}`);
});