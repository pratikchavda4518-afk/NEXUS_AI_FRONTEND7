import "./Dashboard.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardGrid from "../../components/DashboardGrid/DashboardGrid";
import Widget from "../../components/Widgets/Widget";
import AIWorkspace from "../../components/Workspace/AIWorkspace";
import AIAssistantPanel from "../../components/AIAssistantPanel/AIAssistantPanel";
import TerminalWidget from "../../components/TerminalWidget/TerminalWidget";
import AnalyticsHUD from "../../components/AnalyticsHUD/AnalyticsHUD";
import FileExplorer from "../../components/FileExplorer/FileExplorer";
import TopHUD from "../../components/TopHUD/TopHUD";
import AIBackground from "../../components/AIBackground/AIBackground";
import VoiceAssistant from "../../components/VoiceAssistant/VoiceAssistant";
import AIConfig from "../../components/AIConfig/AIConfig";


export default function Dashboard(){

  return(

    <div className="dashboard">
        <AIBackground />


      <Sidebar />


      <main className="dashboard-main">
        <TopHUD />


        <div className="dashboard-title">

          <h1>NEXUS AI COMMAND CENTER</h1>

          <p>
            Autonomous Intelligence Operating System
          </p>

        </div>



        <DashboardGrid>


        <Widget title="AI Workspace">

            <AIWorkspace />

        </Widget>



         <Widget title="AI Assistant">

            <AIAssistantPanel />

        </Widget>



         <Widget title="Terminal">

    <TerminalWidget />

        </Widget>


        <Widget title="System Analytics">

    <AnalyticsHUD />

</Widget>

<Widget title="AI Memory Explorer">

    <FileExplorer />

</Widget>

<Widget title="Voice Control">

    <VoiceAssistant />

</Widget>

<Widget 
title="AI Configuration"
className="widget-large"
>

    <AIConfig />

</Widget>


        </DashboardGrid>


      </main>


    </div>

  );

}