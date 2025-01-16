import { Link } from 'react-router-dom';
import logo from '../assets/red-stray-games-logo-small.png';
import { NavbarLinks } from './Links';
import { useState } from 'react';
import { Socials } from './Socials';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // A simple function to toggle menuOpen.
    const handleMenuClick = () => {
        // For demonstration, log something to the console
        console.log("Hamburger clicked!");

        // Then toggle the state
        setMenuOpen((prev) => !prev);
    };
    return (
        <nav className="flex place-content-around bg-black pt-2 pb-2 items-center">
            <Link to="/">
                <img src={logo} alt="Red Stray Logo" />
            </Link>
            <Socials />
            <NavbarLinks />
        {/* Hamburger menu icon (hidden on md+, visible on mobile) */}
        <div className="md:hidden flex flex-col items-center justify-center gap-1 text-white"
        onClick={handleMenuClick}>
            {/* Each "line" of the hamburger icon */}
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
        </div>
    </nav>
    );
}
