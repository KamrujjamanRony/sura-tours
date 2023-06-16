import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Feature from "../components/home/Feature";
import Tours from "../components/home/Tours";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Feature />
        <Tours />
      </main>
    </>
  );
};

export default Home;
