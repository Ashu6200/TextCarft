const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.DBURL;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL).then(data => {
      console.log(`Connected to databse:  ${data.connection.host}`);
    });
  } catch (error) {
    console.log(`Failed to connect to database`, error);
    setTimeout(connectDB, 5000);
  }
};

module.exports = { connectDB };
