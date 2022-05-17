import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
      <>
        <div className="alert alert-warning" role="alert">
          Check out our exclusive 2022 &lsquo;Prince&rsquo; gear! We have tote
          bags, long-sleeves, and pins.
          <br />
          Stop by in-person at Princeton Reunions on May 21st at 48 University
          Place Courtyard or anytime before May 26th to pick up your gear.
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-muted sticky-top pb-2 border-bottom border-dark">
          <div className="container-fluid d-flex align-items-center py-md-2 px-md-5">
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