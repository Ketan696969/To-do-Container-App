require("dotenv").config();

const config = require("./src/config");
const mongoose = require("mongoose");
const app = require("./src/app");

mongoose.connect(config.mongoUri)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
  