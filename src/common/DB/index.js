import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Auth");
    const { host, name } = conn.connection;
    console.log(`MongoDB connected: ${host}/${name}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
