const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const morgan = require('morgan')
require("dotenv").config();


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'))

// Connect to MongoDB Atlas
// connectDB();

// Routes
// app.use("/api/users", require("./routes/userRoutes"));
app.use('/',(req,res)=>{
  res.send("hello world");
})
app.use("/api/orders", require("./routes/orderRoutes"));

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
