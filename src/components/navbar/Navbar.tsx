import React from "react";
import bannerTransparent from "./banner-transparent.png";
import "./navbar.css";
import { Link } from 'react-router-dom';
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-muted sticky-top pb-2 border-bottom border-dark">
            <div className="container-fluid d-flex align-items-center py-md-2 px-md-5">
                <Link className="navbar-brand mx-auto mx-md-0 pb-2" to="/">
                    <img src={bannerTransparent} alt="banner" className="banner" />
                </Link>
                <ul className="navbar-nav mx-auto mx-md-0 ms-md-auto">
                    <NavbarItem href="https://subscribe.dailyprincetonian.com/" text="Subscribe to Newsletter" />
                    <NavbarItem href="https://www.dailyprincetonian.com/" text="Read the 'Prince'" />
                </ul>
            </div>
        </nav>
    )
}