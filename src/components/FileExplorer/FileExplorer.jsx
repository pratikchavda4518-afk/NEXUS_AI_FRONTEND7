import { useEffect, useState } from "react";
import "./FileExplorer.css";

import { getMemory } from "../../services/api";


export default function FileExplorer(){


    const [memory,setMemory] = useState([]);



    useEffect(()=>{


        getMemory()

        .then(data=>{

            setMemory(data);

        });


    },[]);




    return(


        <div className="file-explorer">



            <div className="memory-status">


                🧠 AI MEMORY ONLINE


                <span>

                    Stored:
                    {" "}
                    {memory.length}

                </span>


            </div>





            <div className="file-list">


            {

                memory.length === 0

                ?

                <div className="file-item">

                    No memories found...

                </div>


                :


                memory.map((item)=>(


                    <div
                    className="file-item"
                    key={item.id}
                    >


                        <div>

                            📝

                            {item.command}

                        </div>



                        <small>

                            NEXUS:

                            {" "}

                            {item.response}

                        </small>


                    </div>


                ))

            }


            </div>


        </div>


    );

}