const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect("mongodb+srv://avinashkumar25:avinashkumar@cluster0.4wonrxg.mongodb.net/EduNovaDB")
    .then(() => {
      console.log("DB Connection Established Successfully");
    })
    .catch((error) => {
      console.log(`Db Connection failed`, error);
    });
};


module.exports=connectDB;