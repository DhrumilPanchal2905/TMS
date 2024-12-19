"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ** Check if token exists and redirect accordingly **
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      autoRedirectBasedOnRole(token);
    }
  }, []);

  const autoRedirectBasedOnRole = async (token) => {
    try {
      const { data } = await axios.get("/api/auth/session", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data?.role === "admin") {
        router.push("/admin-dashboard");
      } else {
        router.push("/user-dashboard");
      }
    } catch (error) {
      console.error("Failed to fetch user session", error);
      localStorage.removeItem("token"); // Remove invalid token
    }
  };

  // ** Handle login logic **
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    try {
      const { data } = await axios.post("/api/auth", { email, password });

      // Save token to localStorage
      localStorage.setItem("token", data.token);
      alert("Login successful!");

      // Redirect based on role
      if (data.role === "admin") {
        router.push("/admin-dashboard");
      } else {
        router.push("/user-dashboard");
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Welcome Back
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 text-center py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
