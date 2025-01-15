import logo from '../assets/red-stray-games-logo-small.png';
import { NavbarLinks } from './Links';

import { Socials } from './Socials';

export function Navbar() {
    return (
        <nav className="flex place-content-around bg-black pt-2 pb-2 items-center">
            <img src={logo} alt="Red Stray Logo" />
            <Socials/>
            <NavbarLinks/>
        </nav>
    );
}
