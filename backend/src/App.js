const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");
const http = require("http");
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Accept",
      "User-Agent",
      "Origin",
      "Referer",
      "Content-Length",
      "Authorization",
      "X-Requested-With",
    ],
  })
);

// Middleware
app.use(express.json());

// Routes
const contactRoutes = require("./routes/emailRoutes");
app.use("/api", contactRoutes);
app.use("/api", blogRoutes);


const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    console.log("Database Connected successfully!");
    server.listen(PORT, () => {
      console.log("Server listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.error("Database Connection Failed!", err);
    process.exit(1); 
  });
