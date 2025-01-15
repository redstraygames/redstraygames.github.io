import { Link } from 'react-router-dom';

export function NavbarLinks() {
    return (
        <div className="flex gap-4 items-center">
        <Link to="/about" className="text-xl font-roboto text-white hover:underline hover:text-customRed">
            About
        </Link>
        <Link to="/games" className="text-xl font-roboto text-white hover:underline hover:text-customRed">
            Games
        </Link>
        <Link to="/assets" className="text-xl font-roboto text-white hover:underline hover:text-customRed">
            Assets
        </Link>
    </div>
    )
}