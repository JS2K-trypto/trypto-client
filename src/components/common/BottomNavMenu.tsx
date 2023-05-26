import Link from "next/link";
import Image from "next/image";

interface navMenuProps {
  isActive: boolean;
  href: string;
  label: string;
  onClick: () => void;
}

const NavMenu = ({ isActive, href, label }: navMenuProps) => {
  return (
    <Link href={href}>
      <a className={isActive ? "active" : ""}>{label}</a>
      <Image alt={label} src={`/images/${label}`} width="38" height="30" />
    </Link>
  );
};

export default NavMenu;
