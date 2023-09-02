"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  return (
    <main className="">
      <Header />
      <Intro />
      <section id="main-content">asdsdasda</section>
    </main>
  );
}
