import { useState } from "react";
import "./VoiceAssistant.css";

import { sendCommand } from "../../services/api";


export default function VoiceAssistant(){


    const [text,setText] = useState(
        "Waiting for command..."
    );


    const [response,setResponse] = useState(
        ""
    );



   const speak = (message)=>{

    if(!window.speechSynthesis){

        console.log("Speech synthesis not supported");

        return;

    }


    window.speechSynthesis.cancel();


    const utterance =
    new SpeechSynthesisUtterance(message);


    utterance.lang = "en-US";

    utterance.rate = 0.9;

    utterance.pitch = 1;


    utterance.volume = 1;


    window.speechSynthesis.speak(
        utterance
    );


};



    const startListening = ()=>{


        const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;



        if(!SpeechRecognition){

            setText(
                "Speech not supported"
            );

            return;

        }



        const recognition =
        new SpeechRecognition();



        recognition.start();



        recognition.onstart = ()=>{

            setText(
                "Listening..."
            );

        };



        recognition.onresult = async(event)=>{


            const command =
            event.results[0][0]
            .transcript;



            setText(command);



            const result =
            await sendCommand(
                command
            );



            setResponse(
                result.response
            );



            speak(
                result.response
            );


        };


    };




    return(

        <div className="voice-box">


            <div className="voice-status">

                🎙 NEXUS VOICE CORE

            </div>



            <div className="voice-text">


                <p>
                Command:
                </p>


                {text}


            </div>



            <div className="voice-text">


                <p>
                NEXUS:
                </p>


                {response}


            </div>



            <button
onClick={()=>{
    speak("Hello Pratik, NEXUS AI voice system is online");
}}
>
🔊 Test Voice
</button>   



        </div>

    );

}