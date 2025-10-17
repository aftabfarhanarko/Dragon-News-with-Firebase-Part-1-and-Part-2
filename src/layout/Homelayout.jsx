import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LetasNews from "../Components/LetasNews";
import Navbar from "../Components/Navbar";

const Homelayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto my-4">
        <Header></Header>
        <section className="w-11/12 mx-auto ">
          <LetasNews></LetasNews>
        </section>
        <nav className="w-11/12 mx-auto ">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default Homelayout;
