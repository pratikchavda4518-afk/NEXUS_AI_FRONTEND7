import { useEffect, useState } from "react";
import "./AICore.css";


function AICore(){

    const [stats,setStats] = useState({

        cpu:42,
        memory:68,
        ai:87,
        security:99

    });


    const [logs,setLogs] = useState([
        "AI Core initialized...",
        "Neural network online...",
        "System monitoring started..."
    ]);


    useEffect(()=>{


        const interval=setInterval(()=>{


            setStats({

                cpu:Math.floor(Math.random()*40)+40,

                memory:Math.floor(Math.random()*30)+50,

                ai:Math.floor(Math.random()*15)+80,

                security:Math.floor(Math.random()*5)+95

            });



            const messages=[

                "Scanning neural pathways...",
                "Optimizing AI models...",
                "Checking system integrity...",
                "Running security analysis...",
                "Processing user commands...",
                "Updating intelligence matrix..."

            ];


            const random=
            messages[
                Math.floor(
                    Math.random()*messages.length
                )
            ];



            setLogs(prev=>[

                ...prev.slice(-5),

                random

            ]);



        },2000);



        return()=>clearInterval(interval);


    },[]);



return(

<div className="ai-core-page">


<h1 className="ai-header">
    AI CORE SYSTEM
</h1>



<div className="ai-grid">


<div className="ai-card">

<div className="glow"></div>

<h2>CPU LOAD</h2>

<div className="ai-value">
{stats.cpu}%
</div>

<p className="ai-status">
ACTIVE
</p>

</div>



<div className="ai-card">

<div className="glow"></div>

<h2>MEMORY</h2>

<div className="ai-value">
{stats.memory}%
</div>

<p className="ai-status">
OPTIMIZED
</p>

</div>




<div className="ai-card">

<div className="glow"></div>

<h2>AI PROCESSING</h2>

<div className="ai-value">
{stats.ai}%
</div>

<p className="ai-status">
RUNNING
</p>

</div>




<div className="ai-card">

<div className="glow"></div>

<h2>SECURITY</h2>

<div className="ai-value">
{stats.security}%
</div>

<p className="ai-status">
PROTECTED
</p>

</div>


</div>





<div className="core-panel">


<h2>
CORE OPERATIONS
</h2>


<div className="operation">


<label>
CPU Processing
</label>

<div className="bar">
<span style={{
width:`${stats.cpu}%`
}}></span>
</div>




<label>
AI Intelligence
</label>

<div className="bar">
<span style={{
width:`${stats.ai}%`
}}></span>
</div>




<label>
Security Shield
</label>

<div className="bar">
<span style={{
width:`${stats.security}%`
}}></span>
</div>



</div>


</div>





<div className="terminal-box">


<h3>
LIVE TERMINAL
</h3>


{
logs.map((log,index)=>(

<p key={index}>
&gt; {log}
</p>

))
}


</div>



</div>


)


}


export default AICore;