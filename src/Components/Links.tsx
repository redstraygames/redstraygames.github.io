import { Link } from "react-router-dom";

type NavbarLinksProps = {
  isMobile?: boolean;
  onLinkClick?: () => void;
};

export function NavbarLinks({ isMobile, onLinkClick }: NavbarLinksProps) {
  // Decide which container styles to use:
  // - Desktop: "hidden md:flex gap-4 items-center"
  // - Mobile: "flex flex-col gap-4 items-center bg-customRed p-4" (for example)
  const containerClasses = isMobile
    ? "flex flex-col gap-4 items-center bg-customRed p-4"
    : "hidden md:flex gap-4 items-center";

  return (
    <div className={containerClasses}>
      <Link
        to="/about"
        className="text-xl font-roboto text-white hover:underline hover:text-customRed"
        onClick={onLinkClick} // close menu on click
      >
        About
      </Link>
      <Link
        to="/games"
        className="text-xl font-roboto text-white hover:underline hover:text-customRed"
        onClick={onLinkClick}
      >
        Games
      </Link>
      <Link
        to="/assets"
        className="text-xl font-roboto text-white hover:underline hover:text-customRed"
        onClick={onLinkClick}
      >
        Assets
      </Link>
    </div>
  );
}
