import { useState } from "react";
import "./Terminal.css";


function Terminal(){


const [command,setCommand] = useState("");

const [logs,setLogs] = useState([

"NEXUS TERMINAL v1.0",
"System initialized...",
"Connection established...",
"Waiting for command..."

]);



function executeCommand(){


if(!command.trim()) return;



let output="Unknown command";



let cmd = command.toLowerCase();



if(cmd==="help"){

output=
"Available commands: status, clear, ai, dashboard";

}



else if(cmd==="status"){

output=
"All systems operational. AI Core ONLINE.";

}



else if(cmd==="ai"){

output=
"NEXUS AI Engine running.";

}



else if(cmd==="dashboard"){

output=
"Dashboard module ready.";

}



else if(cmd==="clear"){

setLogs([]);

setCommand("");

return;

}



setLogs(prev=>[

...prev,

"> "+command,

output

]);



setCommand("");

}




return(


<div className="terminal-page">



<div className="terminal-header">

<h1>
NEXUS TERMINAL
</h1>


<div className="terminal-status">

● CONNECTED

</div>


</div>





<div className="terminal-window">



<div className="terminal-top">


<span></span>
<span></span>
<span></span>


</div>




<div className="terminal-body">


{

logs.map((log,index)=>(


<p key={index}>

{log}

</p>


))

}



</div>




<div className="terminal-input">


<span>
root@nexus:~
</span>



<input

value={command}

onChange={
e=>setCommand(e.target.value)
}


onKeyDown={
e=>{

if(e.key==="Enter")
executeCommand();

}

}


placeholder="Enter command..."

/>


</div>




</div>




</div>


)


}


export default Terminal;