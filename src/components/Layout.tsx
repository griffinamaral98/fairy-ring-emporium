import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface AppProps {
  children: any;
}

const Layout = ({ children }: AppProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
