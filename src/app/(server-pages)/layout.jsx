"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Initialize AOS here, inside useEffect, to ensure it's client-side only
    AOS.init({
      offset: 0,
      duration: 1000,
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400" height={4} />
        </div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </Suspense>
  );
}
