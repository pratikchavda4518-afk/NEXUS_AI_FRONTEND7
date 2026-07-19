import "./AIBackground.css";


export default function AIBackground(){

    const particles = Array.from(
        {length:40}
    );


    return(

        <div className="ai-background">

            {
                particles.map((_,index)=>(

                    <span
                    key={index}
                    className="particle"
                    ></span>

                ))
            }

        </div>

    );

}