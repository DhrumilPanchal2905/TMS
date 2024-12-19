import mongoose from "mongoose";

let users = [
  {
    _id: new mongoose.Types.ObjectId(),
    email: "admin@example.com",
    role: "admin",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    email: "user@example.com",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    email: "user1@example.com",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    email: "user2@example.com",
    role: "user",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    email: "user3@example.com",
    role: "user",
  },
];

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
