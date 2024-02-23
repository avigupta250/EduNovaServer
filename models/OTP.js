const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

const sendVerificationEmail = async (email, otp) => {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from EduNova",
      otp
    );

    console.log("Email sent Successfully", mailResponse);
  } catch (err) {
    console.log(err);
  }
};

OTPSchema.pre("save",async function(next){
	await sendVerificationEmail(this.email,this.otp);
	next();
})

module.exports = mongoose.model("OTP", OTPSchema);
