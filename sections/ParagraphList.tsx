import App from "deco-sites/bounty-a-la-gpt/components/discord/request.tsx";
import Tips from "deco-sites/bounty-a-la-gpt/components/ui/Tips.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title?: string;
  cards: HTML[];
}

export default function ParagraphList({ title, cards }: Props) {
  return (
    <>
      <div class={`bg-secondary`}>
        <h1 class={`text-2xl text-primary text-center mt-8 mb-6 lg:m-[64px]`}>{title}</h1>
        <App />
        <Tips description={cards} />
      </div>
    </>
  );
}
