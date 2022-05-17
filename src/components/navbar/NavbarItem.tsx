import React from "react";
import "./navbar.css";

interface NavbarItemProps {
    href: string;
    text: string;
}

export default function NavbarItem(props: NavbarItemProps) {
    const { href, text } = props;
    return (
        <li className="nav-item">
            <a href={href} className="nav-link text-dark py-1 text-uppercase">{text}</a>
        </li>
    );
}