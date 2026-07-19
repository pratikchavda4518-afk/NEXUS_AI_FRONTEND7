import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

    const menu = [

        {
            name:"Dashboard",
            path:"/"
        },

        {
            name:"AI Core",
            path:"/ai-core"
        },

        {
            name:"Assistant",
            path:"/assistant"
        },

        {
            name:"Terminal",
            path:"/terminal"
        },

        {
            name:"Analytics",
            path:"/analytics"
        },

        {
            name:"Memory",
            path:"/memory"
        },

        {
            name:"Settings",
            path:"/settings"
        }

    ];

    return(

        <aside className="sidebar">

            <div className="sidebar-logo">

                NEXUS

                <span>AI OS</span>

            </div>

            <nav>

                {

                    menu.map((item)=>(

                        <NavLink

                            key={item.name}

                            to={item.path}

                            className={({isActive})=>

                                isActive

                                ?

                                "menu-item active"

                                :

                                "menu-item"

                            }

                        >

                            <span>◈</span>

                            {item.name}

                        </NavLink>

                    ))

                }

            </nav>

            <div className="sidebar-footer">

                SYSTEM v1.0

                <br/>

                ONLINE

            </div>

        </aside>

    );

}