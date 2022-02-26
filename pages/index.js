import Head from "next/head";
import { useEffect } from "react";

import Navbar from "../components/organism/Navbar";
import Header from "../components/organism/Header";
import TransactionStep from "../components/organism/TransactionStep";
import GameFeatured from "../components/organism/GameFeatured";
import Reached from "../components/organism/Reached";
import Story from "../components/organism/Story";
import Footer from "../components/organism/Footer";

import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StoreGG | Home</title>
        <meta name="description" content="StoreGG Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* 3 Column - Feature */}

      <TransactionStep />
      {/* 5 Column - Featured-game */}
      <GameFeatured />

      {/* Reached */}
      <Reached />

      {/* Story */}
      <Story />

      {/* Footer */}
      <Footer />
    </>
  );
}
