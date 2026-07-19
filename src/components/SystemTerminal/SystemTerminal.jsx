import { useEffect, useRef, useState } from "react";
import "./SystemTerminal.css";

export default function SystemTerminal() {

  const terminalLines = [

    "[ OK ] Initializing Neural Engine...",
    "[ OK ] Loading AI Core...",
    "[ OK ] Connecting Quantum Network...",
    "[ OK ] Security Layer Enabled...",
    "[ OK ] GPU Accelerator Online...",
    "[ OK ] AI Assistant Ready...",
    "[ OK ] Monitoring System Health...",
    "[ OK ] NEXUS AI Online..."

  ];

  const [logs, setLogs] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {

    let index = 0;

    const timer = setInterval(() => {

      setLogs(prev => [...prev, terminalLines[index]]);

      index++;

      if (index >= terminalLines.length) {
        clearInterval(timer);
      }

    }, 900);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [logs]);

  return (

    <div className="system-terminal">

      <div className="terminal-header">

        <div className="terminal-buttons">

          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>

        </div>

        <h3>NEXUS TERMINAL</h3>

      </div>

      <div className="terminal-body">

        {logs.map((line, index) => (

          <p key={index}>
            <span className="prompt">&gt;</span> {line}
          </p>

        ))}

        <span className="cursor">█</span>

        <div ref={bottomRef}></div>

      </div>

    </div>

  );

}