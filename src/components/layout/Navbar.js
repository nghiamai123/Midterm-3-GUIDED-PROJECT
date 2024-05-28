import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {

return (
    <nav className="navbar bg-success">
        <h1>
            <i className="fab fa-github" /> GitHub Finder
        </h1>
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/about>">About</Link>
            </li>
        </ul>
    </nav>
    );
};
export default Navbar;