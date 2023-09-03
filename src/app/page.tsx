"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AOS from "aos";
import "aos/dist/aos.css";
import FindTalent from "./components/FindTalent";
import Solution from "./components/Solution";
import Loading from "./components/Loading";
import Feature from "./components/Feature";
import Flow from "./components/Flow";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: false,
    });
    setLoading(false);
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <main className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Intro />
          <section id="main-content" className="max-w-[1920px] mx-auto">
            <FindTalent />
            <Solution />
            <Feature />
            <Flow />
          </section>
          <Footer />
        </>
      )}
    </main>
  );
}
