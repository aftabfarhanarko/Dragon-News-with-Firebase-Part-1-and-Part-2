import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LetasNews from "../Components/LetasNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

const Homelayout = () => {
  return (
    <div>
      <header className="my-4">
        <Header></Header>
        <section className="w-11/12 mx-auto ">
          <LetasNews></LetasNews>
        </section>
        <nav className="w-11/12 mx-auto ">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto my-4 gap-5">
      <aside className="col-span-3 ">
        <LeftAside></LeftAside>
      </aside>
        <section className="col-span-6 ">
          <Outlet></Outlet>
        </section>
       <aside className="col-span-3 ">
        <RightAside></RightAside>
       </aside>
      </main>
    </div>
  );
};

export default Homelayout;
