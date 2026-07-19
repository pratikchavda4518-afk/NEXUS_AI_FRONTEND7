import { useEffect, useState } from "react";

import "./AIWorkspace.css";

import {
    getSystemStatus,
    getMonitor
}
from "../../services/api";



export default function AIWorkspace(){


    const [system,setSystem] =
    useState(null);


    const [monitor,setMonitor] =
    useState(null);



    useEffect(()=>{


        getSystemStatus()

        .then(data=>{

            setSystem(data);

        });



        const interval =

        setInterval(()=>{


            getMonitor()

            .then(data=>{

                setMonitor(data);

            });


        },2000);



        return ()=>{

            clearInterval(interval);

        };


    },[]);




    return(


    <div className="ai-workspace">



        <div className="ai-status">


            <span className="status-dot"></span>


            {

                system

                ?

                "SYSTEM ONLINE"

                :

                "CONNECTING..."

            }


        </div>





        <div className="ai-core">


            <div className="core-circle">

                NEXUS

            </div>


        </div>





        <div className="system-info">


            <div className="info-card">

                <span>
                    Machine
                </span>


                <strong>

                {
                    system
                    ?
                    system.machine
                    :
                    "Loading"
                }

                </strong>


            </div>





            <div className="info-card">


                <span>
                    Processor
                </span>


                <strong>

                {
                    system
                    ?
                    system.processor || "CPU"
                    :
                    "Loading"
                }

                </strong>


            </div>





            <div className="info-card">


                <span>
                    Time
                </span>


                <strong>

                {
                    system
                    ?
                    new Date(
                    system.time
                    )
                    .toLocaleTimeString()

                    :

                    "--:--:--"
                }

                </strong>


            </div>


        </div>





        <div className="ai-metrics">



            <div className="metric">

                <span>
                    CPU Usage
                </span>


                <strong>

                {
                    monitor
                    ?
                    monitor.cpu+"%"
                    :
                    "0%"
                }

                </strong>


            </div>





            <div className="metric">

                <span>
                    RAM Usage
                </span>


                <strong>

                {
                    monitor
                    ?
                    monitor.ram+"%"
                    :
                    "0%"
                }

                </strong>


            </div>





            <div className="metric">

                <span>
                    Disk Usage
                </span>


                <strong>

                {
                    monitor
                    ?
                    monitor.disk+"%"
                    :
                    "0%"
                }

                </strong>


            </div>



        </div>





        <button className="ai-button">

            Initialize AI

        </button>



    </div>


    );

}