"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // ** Fetch user session on mount **
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/");

    // Simulating user info fetch, you can modify it as per your needs
    const fetchUser = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData?.email || "User");
      } catch (error) {
        console.error("Failed to load user info", error);
      }
    };

    fetchUser();
  }, [router]);

  // ** Sign out logic **
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo" onClick={() => router.push("/")}>
          Task<span className="highlight">Tracker</span>
        </h1>

        {/* Mobile Menu Icon */}
        <button className="menu-icon" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <div className="user-info">
            <span className="user-email">{user}</span>
            <button className="signout-button" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
