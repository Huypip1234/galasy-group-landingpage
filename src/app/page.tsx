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
import TakeTheChance from "./components/TakeTheChance";
import Advantage from "./components/Advantage";
import Unrivaled from "./components/Unrivaled";
import LeaderShip from "./components/Leadership";
import Roadmap from "./components/Roadmap";
import Join from "./components/Join";
import Model from "./components/Model";
import Member from "./components/Member";
import Story from "./components/Story";

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
    <main className="" id="top">
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
            <TakeTheChance />
            <Advantage />
            <Unrivaled />
            <LeaderShip />
            <Story />
            <Model />
            <Member />
            <Roadmap />
            <Join />
          </section>
          <Footer />
        </>
      )}
    </main>
  );
}
