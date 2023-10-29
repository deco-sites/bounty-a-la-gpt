import Icon from "deco-sites/bounty-a-la-gpt/components/ui/Icon.tsx";
import { useUI } from "deco-sites/bounty-a-la-gpt/sdk/useUI.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import ButtonTips from "deco-sites/bounty-a-la-gpt/components/ui/ButtonTips.tsx";

export interface Props {
  description: HTML[];
}

export default function Tips({ description }: Props) {
  const { displayMenu } = useUI();

  return (
    <div id="tips" class={`flex flex-col items-center justify-center max-w-[760px] mx-auto lg:mb-[100px]`}>
      <div class={`flex flex-col justify-center items-center px-6 gap-6`}>
        <div class={`flex flex-col gap-2`}>
          <Icon id="Idea" size={24} strokeWidth={1} />
          <span class={`font-bold text-base text-primary`}>Tips</span>
        </div>
        <div class={`flex flex-col gap-4 items-center justify-center`}>
          {description?.map((description) => {
            return (
              <div
                class={`flex items-center text-center text-primary bg-base-200 px-2 py-1 rounded-lg w-full justify-center`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            );
          })}
        </div>
        <ButtonTips />
      </div>
    </div>
  );
}
