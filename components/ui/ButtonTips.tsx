import { useUI } from "deco-sites/bounty-a-la-gpt/sdk/useUI.ts";
import { useEffect } from "preact/hooks";

export default function ButtonTips() {
  const { initChatBot } = useUI();

  function displayChat() {
    const tips = document.getElementById("tips");
    const chat = document.getElementById("chat");
    if (tips) {
      tips.style.display = "none";
    }
    if (chat) {
      chat.style.display = "flex";
    }
  }
  //Inicia o chat ao carregar a página
  useEffect(() => {
    initChatBot.value = true;
  });

  return (
    <button
      class={`bg-primary px-6 py-3 rounded-[4px] text-white w-[190px] lg:mt-2`}
      onClick={() => {
        displayChat();
      }}
    >
      Vamos Lá!
    </button>
  );
}
