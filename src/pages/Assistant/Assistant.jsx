import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import "./Assistant.css";


function Assistant(){


const [messages,setMessages] = useState([

{
sender:"AI",
text:"NEXUS Assistant online. All systems ready."
}

]);


const [input,setInput] = useState("");

const [listening,setListening] = useState(false);





function getResponse(command){


let text = command.toLowerCase();



if(
text.includes("hello") ||
text.includes("hi")
){

return "Hello. NEXUS AI Assistant is online.";

}



if(text.includes("status")){

return "System status: AI Core active. Security shield enabled.";

}



if(text.includes("ai core")){

return "AI Core is running with maximum intelligence protocols.";

}



if(text.includes("dashboard")){

return "Dashboard module is ready.";

}



if(text.includes("terminal")){

return "Terminal interface is available.";

}



if(text.includes("time")){

return "Current time is " +
new Date().toLocaleTimeString();

}



if(text.includes("date")){

return "Today is " +
new Date().toDateString();

}



if(
text.includes("who are you")
||
text.includes("your name")
){

return "I am NEXUS, your personal AI command assistant.";

}



if(
text.includes("thank")
){

return "You are welcome. NEXUS always assists.";

}



return "Command received. I am analyzing your request.";


}






function sendMessage(){


if(!input.trim()) return;



let response = getResponse(input);



setMessages(prev=>[

...prev,

{
sender:"USER",
text:input
},

{
sender:"AI",
text:response
}

]);



setInput("");

}




function voiceInput(){



const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;



if(!SpeechRecognition){

alert(
"Voice recognition not supported in this browser"
);

return;

}




const recognition =
new SpeechRecognition();



recognition.lang="en-US";

recognition.start();



setListening(true);




recognition.onresult=(event)=>{


let voiceText =
event.results[0][0].transcript;



setInput(voiceText);



setListening(false);


};



recognition.onend=()=>{

setListening(false);

};



}






return(


<div className="assistant-page">



<div className="assistant-header">


<h1>
NEXUS AI ASSISTANT
</h1>


<div className="online">
● ONLINE
</div>


</div>





<div className="ai-core">


<div
className={
listening
?
"core listening"
:
"core"
}
>


</div>


<p>

{
listening
?
"LISTENING..."
:
"NEXUS READY"
}

</p>


</div>






<div className="assistant-container">



<div className="chat-box">


{

messages.map((msg,index)=>(


<div

key={index}

className={
msg.sender==="AI"
?
"message ai"
:
"message user"
}

>


<span>
{msg.sender}
</span>


<p>
{msg.text}
</p>



</div>


))


}



</div>







<div className="input-area">



<button

className="mic"

onClick={voiceInput}

>

<FaMicrophone/>

</button>





<input


value={input}


onChange={
e=>setInput(e.target.value)
}


placeholder="Ask NEXUS anything..."



onKeyDown={
e=>{

if(e.key==="Enter")
sendMessage();

}

}


/>





<button

onClick={sendMessage}

>

SEND

</button>




</div>





</div>




</div>


)


}


export default Assistant;