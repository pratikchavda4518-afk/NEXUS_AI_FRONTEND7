import { useEffect, useState } from "react";
import "./TopHUD.css";


export default function TopHUD(){

    const [time,setTime] = useState(
        new Date()
    );


    useEffect(()=>{

        const timer=setInterval(()=>{

            setTime(new Date());

        },1000);


        return()=>clearInterval(timer);

    },[]);



    return(

        <div className="top-hud">


            <div className="hud-brand">

                NEXUS AI

                <span>
                    COMMAND CENTER
                </span>

            </div>




            <div className="hud-status">


                <div>

                    🟢 AI ONLINE

                </div>



                <div>

                    🌐 SERVER ACTIVE

                </div>



            </div>




            <div className="hud-time">


                {time.toLocaleTimeString()}


            </div>




            <div className="hud-user">


                👤 PRATIK

            </div>


        </div>

    );

}