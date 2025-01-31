const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (e) {
    console.error("MongoDB connection error:", e);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectToDB;
