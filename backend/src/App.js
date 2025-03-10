const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
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

app.use(express.json());

const contactRoutes = require("./routes/emailRoutes");
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
