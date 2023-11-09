import { Component, h } from "preact";
import Icon from "deco-sites/bounty-a-la-gpt/components/ui/Icon.tsx";
import { useUI } from "deco-sites/start/sdk/useUI.ts";

interface ChatInputProps {
  onSubmit: (message: string) => void;
}

interface ChatInputState {
  message: string;
}

export default class ChatInput
  extends Component<ChatInputProps, ChatInputState> {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  handleMessageChange = (e: Event) => {
    this.setState({ message: (e.target as HTMLInputElement).value });
  };

  handleSendMessage = () => {
    const { message } = this.state;
    if (message) {
      this.props.onSubmit(message);
      this.setState({ message: "" }, () => {
        const container = document.getElementById("container");

        if (container) {
          container.scrollTop = 100000;
        }
      });
    }
  };

  handleRefreshChat = () => {
    this.props.onSubmit("Quero postar outra Bounty!");
    this.setState({ message: "" }, () => {
      const container = document.getElementById("container");

      if (container) {
        container.scrollTop = 100000;
      }
    });
  };

  handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      this.handleSendMessage();
    }
  };

  render() {
    const { refreshBot } = useUI();

    return (
      <>
        <div
          class={`flex px-6 lg:w-[760px] lg:mx-auto duration-300 ${
            refreshBot.value ? "opacity-0 absolute" : "relative"
          }`}
        >
          <input
            type="text"
            id="input-chat"
            class="border border-[#C6C6C6] px-5 pr-[60px] py-[15px] rounded-2xl w-full"
            placeholder="Type message"
            value={this.state.message}
            onInput={this.handleMessageChange}
            onKeyPress={this.handleKeyPress}
          />
          <button
            class="absolute right-10 top-4"
            id={`submit-message`}
            onClick={this.handleSendMessage}
          >
            <Icon id="Send" size={24} strokeWidth={1} />
          </button>
        </div>
        <div class={`flex items-center justify-center`}>
          <button
            class={`${
              refreshBot.value
                ? "flex"
                : "opacity-0 absolute -top-[1000px] cursor-none"
            } duration-300 bg-primary px-6 py-3 rounded-[4px] text-white w-fit lg:mt-2`}
            onClick={() => {
              refreshBot.value = false;
              this.handleRefreshChat();
            }}
          >
            Deseja postar outra bounty?
          </button>
        </div>
      </>
    );
  }
}
