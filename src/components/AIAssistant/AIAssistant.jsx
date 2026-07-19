import { useEffect, useRef, useState } from "react";

import "./AIAssistant.css";

import Message from "./Message";
import InputBox from "./InputBox";
import Typing from "./Typing";

export default function AIAssistant() {

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Welcome to NEXUS AI 🚀"
        },
        {
            sender: "ai",
            text: "I'm your futuristic AI assistant. How can I help you today?"
        }
    ]);

    const [input, setInput] = useState("");

    const [typing, setTyping] = useState(false);

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [messages, typing]);

    const sendMessage = () => {

        if (!input.trim()) return;

        const userText = input;

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: userText
            }
        ]);

        setInput("");

        setTyping(true);

        setTimeout(() => {

            const replies = [

                "Interesting question. 🚀",

                "I'm analyzing your request.",

                "Neural Engine processed your command.",

                "That feature will soon connect to FastAPI.",

                "NEXUS AI is always learning."

            ];

            const randomReply =
                replies[Math.floor(Math.random() * replies.length)];

            setMessages(prev => [

                ...prev,

                {
                    sender: "ai",
                    text: randomReply
                }

            ]);

            setTyping(false);

        }, 1500);

    };

    return (

        <div className="assistant">

            <div className="assistant-header">

                <div className="status"></div>

                <div>

                    <h3>NEXUS AI</h3>

                    <p>Online</p>

                </div>

            </div>

            <div className="assistant-chat">

                {messages.map((msg, index) => (

                    <Message
                        key={index}
                        sender={msg.sender}
                        text={msg.text}
                    />

                ))}

                {typing && <Typing />}

                <div ref={bottomRef}></div>

            </div>

            <InputBox

                input={input}

                setInput={setInput}

                sendMessage={sendMessage}

            />

        </div>

    );

}