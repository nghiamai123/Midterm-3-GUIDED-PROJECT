import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from '@mui/material/Button';

const Navbar = () => {
const [light, setLight] = useState(true);

// useEffect(() => (() => setLight(false)), [light]);

const toggleMode = () => {
    setLight(!light);
    if (!light === true) {
        document.body.style.backgroundColor = "white";
        return true;
    }
    else {
        document.body.style.backgroundColor = "#121212";
        return false;
    }
}

return (
    <nav className="navbar bg-success">
        <h1>
            <i className="fab fa-github" /> GitHub Finder
        </h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Button variant="contained" onClick={toggleMode}>{light === true ? <LightModeIcon /> : <DarkModeIcon />}</Button>
            </li>
        </ul>
    </nav>
    );
};
export default Navbar;