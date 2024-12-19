import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

let users = [
    { id: 1, email: 'admin@example.com', password: bcrypt.hashSync('admin123', 10), role: 'admin' },
    { id: 2, email: 'user@example.com', password: bcrypt.hashSync('user123', 10), role: 'user' },
    { id: 2, email: 'user1@example.com', password: bcrypt.hashSync('user123', 10), role: 'user' },
    { id: 2, email: 'user2@example.com', password: bcrypt.hashSync('user123', 10), role: 'user' },
    { id: 2, email: 'user3@example.com', password: bcrypt.hashSync('user123', 10), role: 'user' }
  ];
  

export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    const { email, password } = req.body;
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token, role: user.role });
  }
}
