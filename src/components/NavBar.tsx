import React, { useState } from "react";
import { Link } from "gatsby";
import { FaAlignJustify } from "react-icons/fa";
import ShoppingSvg from "../images/shopping-bag.svg";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(true);

  return (
    <nav className="flex items-center justify-center lg:h-24">
      <div className="w-[90vw] max-w-5xl lg:flex lg:items-center">
        <div className="flex justify-between items-center h-24 lg:p-0 lg:mr-8 lg:h-auto">
          <Link to="/" className="">
            <span className="text-xl font-semibold whitespace-nowrap">
              Fairy Ring Emporium
            </span>
          </Link>
          <button className="px-3 py-px text-2xl lg:hidden">
            <FaAlignJustify onClick={handleToggle} />
          </button>
        </div>
        <div className={show ? "nav-links h-96" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="">
            Home
          </Link>
          <Link to="/shop" className="nav-link" activeClassName="">
            Shop
          </Link>
          <Link to="/gallery" className="nav-link" activeClassName="">
            Gallery
          </Link>

          <Link to="/commission" className="nav-link" activeClassName="">
            Commission
          </Link>
          <Link to="/about" className="nav-link" activeClassName="">
            About
          </Link>
          <Link to="/contact" className="nav-link" activeClassName="">
            Contact
          </Link>

          <form className="ml-7">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block p-1 pl-10 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
              />
            </div>
          </form>

          <div className=" checkout">
            <Link to="/checkout" className="">
              <div className="relative flex items-center justify-center cursor-pointer h-11 w-11">
                <ShoppingSvg className="h-8 w-8" />
                <span className="absolute text-xs font-bold bottom-2.5">0</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
