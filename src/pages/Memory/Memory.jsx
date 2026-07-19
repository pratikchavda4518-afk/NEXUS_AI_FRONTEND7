import { useState } from "react";
import "./Memory.css";


function Memory(){


const [memory,setMemory]=useState([

"NEXUS system initialized",

"User prefers futuristic UI design",

"AI Core module activated",

"Analytics monitoring enabled"

]);



const [input,setInput]=useState("");



function saveMemory(){


if(!input.trim()) return;


setMemory([

...memory,

input

]);


setInput("");

}




return(

<div className="memory-page">



<div className="memory-header">


<h1>
NEXUS MEMORY CORE
</h1>


<div className="memory-status">

● ACTIVE

</div>


</div>






<div className="memory-grid">



<div className="memory-card">


<h2>
TOTAL MEMORIES
</h2>


<div className="memory-value">

{memory.length}

</div>


<p>
STORED DATA

</p>


</div>





<div className="memory-card">


<h2>
MEMORY ENGINE
</h2>


<div className="memory-value">

ONLINE

</div>


<p>
LEARNING ENABLED

</p>


</div>






<div className="memory-card">


<h2>
SECURITY

</h2>


<div className="memory-value">

99%

</div>


<p>
ENCRYPTED

</p>


</div>




</div>






<div className="memory-panel">


<h2>
STORED KNOWLEDGE
</h2>



<div className="memory-list">


{

memory.map((item,index)=>(

<div
className="memory-item"
key={index}
>

🧠 {item}

</div>


))


}



</div>




<div className="memory-input">


<input

value={input}

onChange={
e=>setInput(e.target.value)
}

placeholder="Add new memory..."

onKeyDown={
e=>{

if(e.key==="Enter")
saveMemory();

}

}

/>


<button onClick={saveMemory}>

SAVE

</button>


</div>



</div>



</div>

)


}


export default Memory;