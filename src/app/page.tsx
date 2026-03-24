"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Specials from "./components/Specials";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Specials />
      <Menu />
      <Testimonials />
      <Reservation />
      <Footer />
    </main>
  );
}