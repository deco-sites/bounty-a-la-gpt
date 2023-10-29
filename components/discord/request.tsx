import { Component, h } from "preact";
import ChatInput from "./chatInput.tsx";
import { useUI } from "deco-sites/bounty-a-la-gpt/sdk/useUI.ts";
import { useRef } from "https://esm.sh/preact@10.15.1/hooks";

export default class App extends Component {
  state = {
    chatHistory: [],
    isLoading: false,
  };

  getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  sendMessage = (message: string) => {
    const { chatHistory } = this.state;

    // Atualize o histórico localmente antes de enviar a mensagem
    const userMessage = `Você: ${message}`;
    const updatedChatHistory = [...chatHistory, userMessage];

    this.setState({ chatHistory: updatedChatHistory, isLoading: true });

    fetch("https://dev--discord-gpt--decocx.autocode.dev/bountybot/", {
      method: "POST",
      body: JSON.stringify({
        message: message,
        chatHistory: updatedChatHistory,
        userName: "Fulano",
        botName: "Bounty-bot",
        api: "1d87c67e-4095-4a53-a1ad-f6c9e6903788",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const botMessage = `Bounty-bot: ${data.response}`;
        this.setState({
          chatHistory: [...updatedChatHistory, botMessage],
          isLoading: false,
        }, () => {
          const container = document.getElementById("container");

          if (container) {
            container.scrollTop = 1000;
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { initChatBot } = useUI();
    const { chatHistory, isLoading } = this.state;

    if (initChatBot.value) {
      initChatBot.value = false;
      this.sendMessage("Vamos lá!");
    }

    return (
      <div id="chat" class="hidden flex-col justify-between">
        <div
          id={"container"}
          class="mb-4 h-[50vh] overflow-y-scroll .scrollbar-chat"
        >
          <div class="chat-box">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                class={index % 2 === 0
                  ? "user-message bg-white px-6 py-4 border border-[#C6C6C6]/50 text-right"
                  : "bot-message px-6 py-4 border border-[#C6C6C6]/50 text-left"}
              >
                {message}
              </div>
            ))}
          </div>
          {isLoading && (
            <div class="bot-message load px-6 py-4 border border-[#C6C6C6]/50 text-left">
              <span class="loading loading-dots loading-sm text-base-300">
              </span>
            </div>
          )}
        </div>
        <ChatInput onSubmit={this.sendMessage} />
      </div>
    );
  }
}
