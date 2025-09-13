// Định nghĩa các route cho ứng dụng
const express = require('express');
const router = express.Router();

// Route để lấy danh sách nhà sáng tạo
router.get('/creators', (req, res) => {
  // TODO: Logic để lấy danh sách nhà sáng tạo từ database
  // Add error handling placeholder
  try {
    res.json([]);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Route để thêm nhà sáng tạo
router.post('/creators', (req, res) => {
  // TODO: Logic để thêm nhà sáng tạo vào database
  // Add error handling placeholder
  try {
    const creatorData = req.body;
    // Validate input data (example validation)
    if (!creatorData.name || !creatorData.email) {
      return res.status(400).json({ message: 'Missing required fields: name and email are required' });
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(creatorData.email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    res.status(201).send();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;