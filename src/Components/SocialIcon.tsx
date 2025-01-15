interface SocialIconProps {
    href: string;
    children: React.ReactNode;
}

export function SocialIcon({ href, children }: SocialIconProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <div className="fill-white hover:fill-customRed transition duration-200">{children}</div>
        </a>
    );
}