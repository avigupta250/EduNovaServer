const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect("mongodb+srv://avivanced250:facts24@cluster0.x5w9m2h.mongodb.net/EduNovaDB")
    .then(() => {
      console.log("DB Connection Established Successfully");
    })
    .catch((error) => {
      console.log(`Db Connection failed`, error);
    });
};


module.exports=connectDB;