import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Menu from "deco-sites/bounty-a-la-gpt/components/header/Menu.tsx";

interface Logo {
  image: LiveImage;
  altText?: string;
  href?: string;
}

interface Links {
  label: string;
  href: string;
}

export interface Props {
  logo: Logo;
  links: Links[];
}

function Header({ logo, links }: Props) {
  return (
    <header class={`bg-secondary`}>
      <Menu logo={logo} links={links} />
    </header>
  );
}
export default Header;
