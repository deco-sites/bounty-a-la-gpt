import Icon from "deco-sites/bounty-a-la-gpt/components/ui/Icon.tsx";
import { useUI } from "deco-sites/bounty-a-la-gpt/sdk/useUI.ts";

export default function ButtonMenu() {
  const { displayMenu } = useUI();

  return (
    <div class={`flex flex-col items-center justify-center`}>
      <div
        class={`button-menu`}
        onClick={() => {
          displayMenu.value = !displayMenu.value;
        }}
      >
        <Icon id="Bars3" size={24} strokeWidth={1} />
      </div>
      <span class={`text-primary text-sm`}>Menu</span>
    </div>
  );
}
