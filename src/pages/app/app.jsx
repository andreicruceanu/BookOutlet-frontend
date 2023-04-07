import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
