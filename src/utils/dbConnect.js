import mongoose from "mongoose";

const MONGODB_URL = process.env.DATABASE_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the DATABASE_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("MongoDB already connected!");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Connecting to MongoDB...");
    const opts = { bufferCommands: false };
    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      console.log("MongoDB connected successfully!");
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
