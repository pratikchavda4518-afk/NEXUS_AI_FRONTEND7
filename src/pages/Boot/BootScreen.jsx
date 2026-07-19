import { useEffect, useState } from "react";
import "./BootScreen.css";

export default function BootScreen() {
  const [progress, setProgress] = useState(0);

  const messages = [
    "Initializing Neural Core...",
    "Loading Quantum Engine...",
    "Connecting AI Modules...",
    "Starting Security Protocol...",
    "Loading Holographic Interface...",
    "Synchronizing AI Memory...",
    "Authentication Ready...",
  ];

  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return old + 1;
      });
    }, 40);

    let index = 0;

    const messageTimer = setInterval(() => {
      if (index < messages.length) {
        setVisibleMessages((prev) => [...prev, messages[index]]);
        index++;
      } else {
        clearInterval(messageTimer);
      }
    }, 700);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="boot">
      <div className="grid"></div>

      <div className="logo-container">
        <div className="logo-glow"></div>

        <h1>NEXUS AI</h1>
      </div>

      <h2>Neural Intelligence Operating System</h2>

      <div className="terminal">
        {visibleMessages.map((message, index) => (
          <p key={index}>
            {">"} {message}
          </p>
        ))}

        <span className="cursor">█</span>
      </div>

      <div className="progress">
        <div
          className="bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="percent">{progress}%</p>
    </div>
    
  );
  
}

