import { Link } from "react-router-dom";

type NavbarLinksProps = {
  isMobile?: boolean;
  onLinkClick?: () => void;
};

export const onClickUrl = (url: string): (() => void) => () => openInNewTab(url)

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

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
      {/* <Link
        to="/games"
        className="text-xl font-roboto text-white hover:underline hover:text-customRed"
        onClick={onLinkClick}
      >
        Games
      </Link> */}
      <a
        href=""
        className="text-xl font-roboto text-white hover:underline hover:text-customRed"
        onClick={onClickUrl("https://redstrayassets.org/")}
      >
        Assets
        <span className="ml-1" aria-hidden="true">
          🡕
        </span>
    </a>
    </div>
  );
}
