import Icon from "deco-sites/bounty-a-la-gpt/components/ui/Icon.tsx";
import { useUI } from "deco-sites/bounty-a-la-gpt/sdk/useUI.ts";

interface Links {
  label: string;
  href: string;
}

export interface Props {
  links?: Links[];
}

export default function ModalMenu({ links }: Props) {
  const { displayMenu } = useUI();

  return (
    <div
      class={`fixed w-full h-full top-0 bg-secondary z-50 ease-linear duration-200  ${
        displayMenu.value ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div class={`flex items-center justify-between px-6 py-3 bg-white`}>
        <div>
          <Icon id="NewLogo" size={69} strokeWidth={1} class={`h-[30px]`} />
        </div>
        <div
          class={``}
          onClick={() => {
            displayMenu.value = !displayMenu.value;
          }}
        >
          <Icon id="XMark" size={28} strokeWidth={1} />
        </div>
      </div>
      <div>
        <ul class={`flex flex-col p-6`}>
          {links?.map((link) => {
            return (
              <li class={`px-6 py-3`}>
                <a href={link.href} class={`text-base`}>{link.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
