const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Kết nối tới database thành công');
  } catch (error) {
    console.error('Lỗi kết nối database:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;