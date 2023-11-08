import { Component, h } from "preact";
import ChatInput from "./chatInput.tsx";
import { useUI } from "deco-sites/bounty-a-la-gpt/sdk/useUI.ts";
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

interface Props {
  iconBounty: DecoImage;
  iconUser: DecoImage;
}
export default class App extends Component<Props> {
  state = {
    chatHistory: [],
    isLoading: false,
  };

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
          class="mb-4 lg:mx-auto lg:max-w-[870px] lg:w-full h-[50vh] overflow-y-scroll scrollbar-chat"
        >
          <div class="chat-box">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                class={index % 2 === 0
                  ? "user-message bg-white px-6 py-4 border border-[#C6C6C6]/50 text-right"
                  : "bot-message px-6 py-4 border border-[#C6C6C6]/50 text-left"}
              >
                {index % 2 == 0
                  ? (
                    <>
                      <div class={`flex items-center gap-4 flex-row-reverse`}>
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src={this.props.iconUser}
                          alt={"Foto do usuário"}
                        />
                        <div class={`flex flex-col`}>
                          <span class={`font-bold text-primary`}>Você</span>
                          {message}
                        </div>
                      </div>
                    </>
                  )
                  : (
                    <>
                      <div class={`flex items-center gap-4`}>
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src={this.props.iconBounty}
                          alt={"Foto do BotBounty"}
                        />
                        <div class={`flex flex-col`}>
                          <span class={`font-bold text-primary`}>
                            Bounty Bot
                          </span>
                          {message}
                        </div>
                      </div>
                    </>
                  )}
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
