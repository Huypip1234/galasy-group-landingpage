"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AOS from "aos";
import "aos/dist/aos.css";
import FindTalent from "./components/FindTalent";
import Solution from "./components/Solution";
import Loading from "./components/Loading";

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
          <section id="main-content">
            <FindTalent />
            <Solution />
          </section>
        </>
      )}
    </main>
  );
}
