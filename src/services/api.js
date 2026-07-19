const API_URL =
"https://nexus-ai-backend-sfmv.onrender.com";


// SYSTEM STATUS
export async function getSystemStatus(){

    const response = await fetch(
        `${API_URL}/system`
    );

    return await response.json();

}


// MONITOR
export async function getMonitor(){

    const response = await fetch(
        `${API_URL}/monitor`
    );

    return await response.json();

}


// AI COMMAND
export async function sendCommand(command){

    const response = await fetch(
        `${API_URL}/command`,
        {
            method: "POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify({
                command: command
            })
        }
    );


    return await response.json();

}


// MEMORY
export async function getMemory(){

    const response = await fetch(
        `${API_URL}/memory`
    );

    return await response.json();

}


// AI INFO
export async function getAIInfo(){

    const response = await fetch(
        `${API_URL}/ai-info`
    );

    return await response.json();

}


// UPDATE CONFIG
export async function updateConfig(
    name,
    mode,
    voice
){

    const response = await fetch(
        `${API_URL}/config`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                name,
                mode,
                voice
            })
        }
    );


    return await response.json();

}