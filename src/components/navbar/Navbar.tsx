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
          Check out our &lsquo;Prince&rsquo; gear! We have tote bags, long-sleeves, and pins. 
            <br />
            You can pick up gear on campus (delivery options to come out soon!)
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