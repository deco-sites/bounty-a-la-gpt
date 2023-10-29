import Icon from "deco-sites/bounty-a-la-gpt/components/ui/Icon.tsx";

interface Props{
  style?: string;
}

export default function ButtonHome({style}: Props) {

  return (
    <div class={`flex flex-col items-center justify-center ${style ? style : ""}`}>
          <a href={"/"} class={`button-menu`}>
            <Icon id="House" size={24} strokeWidth={1} />
          </a>
          <span class={`text-primary text-sm`}>Home</span>
    </div>
  );
}
