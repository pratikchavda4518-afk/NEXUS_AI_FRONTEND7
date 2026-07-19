import "./AnalyticsHUD.css";


export default function AnalyticsHUD(){

    return(

        <div className="analytics-hud">


            <div className="hud-item">

                <div className="hud-title">

                    CPU LOAD

                </div>


                <div className="bar">

                    <div 
                    className="fill cpu">
                    </div>

                </div>


                <span>
                    72%
                </span>


            </div>




            <div className="hud-item">

                <div className="hud-title">

                    AI PROCESSING

                </div>


                <div className="bar">

                    <div 
                    className="fill ai">
                    </div>

                </div>


                <span>
                    94%
                </span>


            </div>





            <div className="hud-item">

                <div className="hud-title">

                    NETWORK

                </div>


                <div className="bar">

                    <div 
                    className="fill net">
                    </div>

                </div>


                <span>
                    88%
                </span>


            </div>


        </div>

    );

}