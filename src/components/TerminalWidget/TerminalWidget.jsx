import {useState} from "react";
import "./TerminalWidget.css";
import {sendCommand} from "../../services/api";


export default function TerminalWidget(){


const [command,setCommand]=useState("");

const [logs,setLogs]=useState([

"System boot complete",

"Neural engine loaded"

]);



async function execute(){


if(!command)
return;



const result =
await sendCommand(command);



setLogs([

...logs,

"> "+command,

"NEXUS: "+result.response

]);



setCommand("");

}



return(

<div className="terminal-widget">


<div className="terminal-header">

NEXUS TERMINAL

<span>
● LIVE
</span>

</div>



<div className="terminal-screen">


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
$
</span>


<input

value={command}

onChange={(e)=>
setCommand(e.target.value)
}

onKeyDown={(e)=>{

if(e.key==="Enter")
execute();

}}

placeholder="type command..."

/>



</div>


</div>


);


}