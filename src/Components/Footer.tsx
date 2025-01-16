import { Socials } from "./Socials";

export function Footer() {
    return (
      <footer className="flex place-content-around bg-black p-4">
        <h1 className="font-roboto text-white">© 2025 All rights reserved.</h1>
        {/* Socials only on mobile */}
        <Socials variant="footer" />
      </footer>
    );
  }