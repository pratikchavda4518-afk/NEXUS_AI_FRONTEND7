const API_URL =
"http://127.0.0.1:8000";



export async function getSystemStatus(){

    const response =
    await fetch(
        `${API_URL}/system`
    );


    return await response.json();

}



export async function getMonitor(){

    const response =
    await fetch(
        `${API_URL}/monitor`
    );


    return await response.json();

}
export async function sendCommand(command){


    const response =
    await fetch(
        `${API_URL}/command`,
        {

            method:"POST",

            headers:{

                "Content-Type":
                "application/json"

            },


            body:JSON.stringify({

                command

            })

        }
    );


    return await response.json();

}
export async function getMemory(){

    const response =
    await fetch(
        "http://127.0.0.1:8000/memory"
    );


    return await response.json();

}