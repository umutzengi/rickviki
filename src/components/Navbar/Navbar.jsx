import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          <img src={logo} className="logo" alt="" />
        </Link>
        <style>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="fs-5 my-4 gap-4 navbar-nav fs-5">
            <div className="bg-secondary rounded-2 p-1 text-center shadow">
              <NavLink to="/" className="nav-link text-white">
                Characters
              </NavLink>
            </div>
            <div className="bg-secondary rounded-2 p-1 text-center shadow">
              <NavLink to="/episodes" className="nav-link text-white">
                Episode
              </NavLink>
            </div>

            {/* <NavLink
              activeclassname="active"
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
