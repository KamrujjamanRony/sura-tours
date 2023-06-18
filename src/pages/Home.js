import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Feature from "../components/home/Feature";
import Tours from "../components/home/Tours";
import Stories from "../components/home/Stories";
import Book from "../components/home/Book";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Feature />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer />
    </>
  );
};

export default Home;
