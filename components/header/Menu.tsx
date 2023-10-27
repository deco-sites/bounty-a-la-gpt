import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "deco-sites/bounty-a-la-gpt/components/ui/Icon.tsx";
import ButtonMenu from "deco-sites/bounty-a-la-gpt/components/header/ButtonMenu.tsx";
import ModalMenu from "deco-sites/bounty-a-la-gpt/components/header/ModalMenu.tsx";

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

export default function Menu({ logo, links }: Props) {
  return (
    <>
      <div class={`flex items-center justify-between px-6 pt-8`}>
        <ButtonMenu />
        <div>
          <a
            href={logo?.href ?? "#"}
            class=""
          >
            <Picture preload={true}>
              <Source
                media="(max-width: 1023px)"
                src={logo?.image || ""}
                width={121}
                height={42}
              />
              <Source
                media="(min-width: 1024px)"
                src={logo?.image || ""}
                width={184}
                height={64}
              />
              <img
                class=""
                loading={"eager"}
                src={logo.image}
                alt={logo.altText}
              />
            </Picture>
          </a>
        </div>
        <div class={`flex flex-col items-center justify-center`}>
          <a href={"/"} class={`button-menu`}>
            <Icon id="House" size={24} strokeWidth={1} />
          </a>
          <span class={`text-primary text-sm`}>Home</span>
        </div>
      </div>
      <ModalMenu links={links} />
    </>
  );
}
