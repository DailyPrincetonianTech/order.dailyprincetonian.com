import React from "react";

interface NavbarItemProps {
    href: string;
    text: string;
}

export default function NavbarItem(props: NavbarItemProps) {
    return (
        <li className="nav-item">
            <a href={props.href} className="nav-link text-dark py-1 text-uppercase">{props.text}</a>
        </li>
    );
}