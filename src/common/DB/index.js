import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Auth");
    console.log("Connection String", conn._connectionString);

    console.log(`Connected to ${conn.host}`);
  } catch (error) {
    console.log("Error Connecting to the DB", error.message);
    process.exit(1);
  }
};
