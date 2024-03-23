const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DB Connection Established Successfully");
    })
    .catch((error) => {
      console.log(`Db Connection failed`, error);
    });
};


module.exports=connectDB;