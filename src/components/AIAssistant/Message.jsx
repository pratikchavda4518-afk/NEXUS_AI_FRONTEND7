import "./Message.css";

export default function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <div className="avatar">
        {sender === "ai" ? "🤖" : "🧑"}
      </div>

      <div className="bubble">
        {text}
      </div>
    </div>
  );
}