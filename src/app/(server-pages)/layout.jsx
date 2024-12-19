"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation"; // Import usePathname
import { BarLoader } from "react-spinners";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    AOS.init({
      offset: 0,
      duration: 1000,
    });
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <BarLoader color="#f6c400" height={4} />
      </div>
    );
  }

  return (
    <>
      {/* Show Header on all routes except "/" */}
      {pathname !== "/" && <Header />}
      {children}
      {/* <Footer /> */}
    </>
  );
}
