import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Feature from "../components/home/Feature";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Feature />
      </main>
    </>
  );
};

export default Home;
