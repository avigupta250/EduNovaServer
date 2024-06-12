const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const connectDB= require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 8000;

//database connect
connectDB();
//middlewares
app.use(express.json());
app.use(cookieParser());


const corsOptions = {
	origin:"https://edunova-frontend.vercel.app",
	// origin:'http://localhost:3000/',
	credentials: true 
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
  app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'https://edunova-frontend.vercel.app/');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	next();
  })

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

// routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running baby....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

