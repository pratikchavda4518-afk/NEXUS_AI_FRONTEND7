import "./InputBox.css";

export default function InputBox({
  input,
  setInput,
  sendMessage
}) {
  return (
    <div className="input-box">

      <button className="icon-btn" title="Attach File">
        📎
      </button>

      <input
        type="text"
        placeholder="Ask NEXUS AI..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button className="icon-btn" title="Voice">
        🎤
      </button>

      <button
        className="send-btn"
        onClick={sendMessage}
      >
        ➜
      </button>

    </div>
  );
}