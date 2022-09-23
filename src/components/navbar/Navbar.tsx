import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
      <>
        <div
          className="alert alert-warning fade show d-flex justify-content-center mb-0"
          role="alert"
        >
          <div className="d-inline-block">
            Check out our exclusive 2022 &lsquo;Prince&rsquo; gear! We have tote
            bags, long-sleeves, and pins.
            <br />
            Stop by the Daily Princetonian business office on September 25th, 
            October 2nd, and October 9th from 5-7 p.m. to pick up your gear!
          </div>
          <button
            type="button"
            className="btn close align-baseline"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-muted sticky-top pb-1 border-bottom border-dark">
          <div className="container-fluid d-flex align-items-center py-md-0 px-md-5">
            <Link className="navbar-brand mx-auto mx-md-0 pb-2" to="/">
              <img
                src="https://assets.dailyprincetonian.com/common/banner-transparent.png"
                alt="banner"
                className="banner"
              />
            </Link>
            <ul className="navbar-nav mx-auto mx-md-0 ms-md-auto">
              <NavbarItem
                href="https://alumni.dailyprincetonian.com"
                text="Alumni"
              />
              <NavbarItem
                href="https://subscribe.dailyprincetonian.com/"
                text="Subscribe to Newsletter"
              />
              <NavbarItem
                href="https://www.dailyprincetonian.com/"
                text="Read the 'Prince'"
              />
            </ul>
          </div>
        </nav>
      </>
    );
}