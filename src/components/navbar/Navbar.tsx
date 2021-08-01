import React from "react";
import bannerTransparent from "./banner-transparent.png";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-muted sticky-top pb-2 border-bottom border-dark">
            <div className="container-fluid d-flex align-items-center py-md-2 px-md-5">
                <Link className="navbar-brand mx-auto mx-md-0" to="/">
                    <img src={bannerTransparent} alt="banner" className="banner" />
                </Link>
                <ul className="navbar-nav mx-auto mx-md-0 ms-md-auto">
                    <li className="nav-item">
                        <a href="https://subscribe.dailyprincetonian.com/" className="nav-link text-dark">SUBSCRIBE TO NEWSLETTER</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.dailyprincetonian.com/" className="nav-link text-dark">READ THE 'PRINCE'</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}