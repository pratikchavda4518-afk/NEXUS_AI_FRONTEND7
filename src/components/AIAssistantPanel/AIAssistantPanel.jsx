import {useState} from "react";
import "./AIAssistantPanel.css";

import {sendCommand} from "../../services/api";


export default function AIAssistantPanel(){


    const [input,setInput] = useState("");

    const [messages,setMessages] = useState([

        {
            type:"ai",
            text:"System online. How can I assist?"
        }

    ]);



    async function send(){


        if(!input)
        return;



        const userMessage = {

            type:"user",

            text:input

        };



        setMessages(prev=>[
            ...prev,
            userMessage
        ]);



        const result =
        await sendCommand(input);



        setMessages(prev=>[

            ...prev,

            {
                type:"ai",
                text:result.response
            }

        ]);



        setInput("");

    }




    return(

        <div className="assistant-panel">


            <div className="chat-box">


            {
                messages.map((msg,index)=>(

                    <div

                    key={index}

                    className={`message ${msg.type}`}

                    >

                    <span>
                    {
                        msg.type==="ai"
                        ?
                        "NEXUS:"
                        :
                        "YOU:"
                    }
                    </span>


                    {msg.text}


                    </div>

                ))
            }


            </div>



            <div className="chat-input">


                <input

                value={input}

                onChange={(e)=>
                    setInput(e.target.value)
                }

                onKeyDown={(e)=>{

                    if(e.key==="Enter")
                    send();

                }}

                placeholder="Ask NEXUS..."

                />



                <button onClick={send}>

                    Send

                </button>


            </div>


        </div>

    );

}