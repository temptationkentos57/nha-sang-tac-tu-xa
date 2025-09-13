// Định nghĩa các route cho ứng dụng
const express = require('express');
const router = express.Router();

// Route để lấy danh sách nhà sáng tạo
router.get('/creators', (req, res) => {
  // TODO: Logic để lấy danh sách nhà sáng tạo từ database
  res.json([]);
});

// Route để thêm nhà sáng tạo
router.post('/creators', (req, res) => {
  // TODO: Logic để thêm nhà sáng tạo vào database
  res.status(201).send();
});

module.exports = router;