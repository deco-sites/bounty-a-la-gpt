import { Component, h } from "preact";
import Icon from "deco-sites/bounty-a-la-gpt/components/ui/Icon.tsx";

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
      this.setState({ message: "" });
    }
  };

  handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      this.handleSendMessage();
    }
  };

  render() {
    return (
      <div class="flex px-6 relative">
        <input
          type="text"
          id="input-chat"
          class="border border-[#C6C6C6] px-5 py-[15px] rounded-2xl w-full"
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
    );
  }
}
