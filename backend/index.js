const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();

const PORT = process.env.PORT||8000;


app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected");
}).catch((err)=>console.log(err));
 

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(PORT, ()=>{
    console.log(`Backend server is running on ${PORT}`);
})