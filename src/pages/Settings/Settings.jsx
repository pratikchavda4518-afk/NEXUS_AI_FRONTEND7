import { useState } from "react";
import "./Settings.css";


function Settings(){


const [config,setConfig]=useState({

voice:true,
memory:true,
learning:true,
security:true,

intelligence:90,
creativity:75,

mode:"NEXUS CORE"

});



function toggle(name){

setConfig({

...config,

[name]:!config[name]

});

}




return(

<div className="settings-page">


<div className="settings-header">

<div>

<h1>
NEXUS CONTROL CENTER
</h1>

<p>
Advanced AI Configuration Interface
</p>

</div>


<div className="system-online">

● ALL SYSTEMS ONLINE

</div>


</div>





<div className="profile-card">


<div className="core-circle">

AI

</div>


<div>

<h2>
NEXUS AI ENGINE
</h2>


<p>
Version 2.0 Neural Architecture
</p>


<span>
MODE : {config.mode}
</span>

</div>


</div>







<div className="settings-grid">



<div className="control-card">


<h3>
🧠 Intelligence Level
</h3>


<div className="range-value">

{config.intelligence}%

</div>


<input

type="range"

min="0"

max="100"

value={config.intelligence}

onChange={
e=>

setConfig({

...config,

intelligence:e.target.value

})

}

/>


</div>







<div className="control-card">


<h3>
🎨 Creativity Engine
</h3>


<div className="range-value">

{config.creativity}%

</div>


<input

type="range"

min="0"

max="100"

value={config.creativity}

onChange={
e=>

setConfig({

...config,

creativity:e.target.value

})

}

/>


</div>








<div className="control-card">


<h3>
🎤 Voice System
</h3>


<div className="toggle-row">

<span>
Voice Assistant
</span>


<div

className={
config.voice?
"toggle on":
"toggle"
}

onClick={()=>toggle("voice")}

>

<div></div>

</div>


</div>


</div>








<div className="control-card">


<h3>
🧠 Memory Core
</h3>


<div className="toggle-row">

<span>
Long Term Memory
</span>


<div

className={
config.memory?
"toggle on":
"toggle"
}

onClick={()=>toggle("memory")}

>

<div></div>

</div>


</div>


</div>









<div className="control-card">


<h3>
⚡ Learning Mode
</h3>


<div className="toggle-row">

<span>
Auto Learning
</span>


<div

className={
config.learning?
"toggle on":
"toggle"
}

onClick={()=>toggle("learning")}

>

<div></div>

</div>


</div>


</div>









<div className="control-card security">


<h3>
🔐 Security Shield
</h3>


<div className="toggle-row">

<span>
Protection
</span>


<div

className={
config.security?
"toggle on":
"toggle"
}

onClick={()=>toggle("security")}

>

<div></div>

</div>


</div>


</div>




</div>






<div className="save-control">


<button>

SAVE NEXUS CONFIGURATION

</button>


</div>




</div>

)

}


export default Settings;