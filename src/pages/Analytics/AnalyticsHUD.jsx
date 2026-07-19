import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import "./AnalyticsHUD.css";


function AnalyticsHUD(){


const [data,setData]=useState([

{
time:"00:00",
cpu:40,
ai:70
},

{
time:"00:05",
cpu:55,
ai:75
},

{
time:"00:10",
cpu:45,
ai:82
}

]);



useEffect(()=>{


const timer=setInterval(()=>{


setData(prev=>[

...prev.slice(-9),

{

time:new Date()
.toLocaleTimeString()
.slice(0,5),


cpu:
Math.floor(
Math.random()*40
)+40,


ai:
Math.floor(
Math.random()*20
)+80


}

]);



},2000);



return()=>clearInterval(timer);



},[]);





return(

<div className="analytics-page">


<div className="analytics-header">


<h1>
NEXUS ANALYTICS HUD
</h1>


<div className="analytics-status">
● LIVE DATA
</div>


</div>




<div className="analytics-panel">


<h2>
AI PERFORMANCE MONITOR
</h2>



<div className="chart-box">


<ResponsiveContainer
width="100%"
height="100%"
>


<LineChart data={data}>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis
dataKey="time"
/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="cpu"

stroke="#00ffff"

strokeWidth={3}

dot={false}

/>


<Line

type="monotone"

dataKey="ai"

stroke="#00ff99"

strokeWidth={3}

dot={false}

/>


</LineChart>


</ResponsiveContainer>


</div>



</div>





</div>


)


}


export default AnalyticsHUD;