import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collections />
      <Footer />
    </div>
  );
}
