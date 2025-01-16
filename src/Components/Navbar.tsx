import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/red-stray-games-logo-small.png";
import { NavbarLinks } from "./Links";
import { Socials } from "./Socials";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu open/closed
  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu after a link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex place-content-around bg-black pt-2 pb-2 items-center relative">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Red Stray Logo" />
      </Link>

      {/* Social icons (always visible in this example) */}
      <Socials />

      {/* Desktop Nav Links (horizontal). Hidden on mobile. */}
      <NavbarLinks />

      {/* Hamburger icon – visible on mobile only */}
      <div
        className="md:hidden flex flex-col items-center justify-center gap-1 text-white cursor-pointer"
        onClick={handleHamburgerClick}
      >
        <span className="block w-6 h-[2px] bg-white"></span>
        <span className="block w-6 h-[2px] bg-white"></span>
        <span className="block w-6 h-[2px] bg-white"></span>
      </div>

      {/* Mobile Menu (vertical) – appears when menuOpen is true.
          We'll absolutely position it so it overlays or pushes content. */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full md:hidden">
          <NavbarLinks isMobile onLinkClick={handleLinkClick} />
        </div>
      )}
    </nav>
  );
}
