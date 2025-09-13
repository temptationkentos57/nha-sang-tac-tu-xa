// Định nghĩa các route cho ứng dụng
const express = require('express');
const router = express.Router();

// Route để lấy danh sách nhà sáng tạo
router.get('/creators', (req, res) => {
  // Logic để lấy danh sách nhà sáng tạo từ database
  try {
    res.json([]);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Route để thêm nhà sáng tạo
router.post('/creators', (req, res) => {
  // Logic để thêm nhà sáng tạo vào database
  try {
    const creatorData = req.body;
    // Validate input data (name and email are required)
    if (!creatorData.name || !creatorData.email) {
      return res.status(400).json({ message: 'Missing required fields: name and email are mandatory' });
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(creatorData.email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    // Logic to add creator to the database (mocked)
    res.status(201).json({ message: 'Creator added successfully', creator: creatorData });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;