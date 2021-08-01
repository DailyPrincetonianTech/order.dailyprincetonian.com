import React from "react";
import bannerTransparent from "./banner-transparent.png";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-muted sticky-top pb-2 border-bottom border-dark">
            <div className="container-fluid d-flex align-items-center">
                <a className="navbar-brand" href="/">
                    <img src={bannerTransparent} alt="banner" className="banner" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navToggle">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="https://subscribe.dailyprincetonian.com/" className="nav-link text-dark">SUBSCRIBE TO NEWSLETTER</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.dailyprincetonian.com/" className="nav-link text-dark">READ THE 'PRINCE'</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}