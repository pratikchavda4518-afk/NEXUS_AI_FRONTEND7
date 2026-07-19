import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import BootScreen from "./pages/Boot/BootScreen";
import LoginScreen from "./pages/Login/LoginScreen";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard/Dashboard";
import AICore from "./pages/AICore/AICore";
import Assistant from "./pages/Assistant/Assistant";
import Terminal from "./pages/Terminal/Terminal";
import AnalyticsHUD from "./pages/Analytics/AnalyticsHUD";
import Memory from "./pages/Memory/Memory";
import Settings from "./pages/Settings/Settings";
function App() {

  const [bootFinished, setBootFinished] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => {
      setBootFinished(true);
    }, 5000);


    return () => clearTimeout(timer);

  }, []);



  if (!bootFinished) {

    return <BootScreen />;

  }



  if (!loggedIn) {

    return (
      <LoginScreen 
        onLogin={() => setLoggedIn(true)}
      />
    );

  }



  return (

    <div className="app">


      <Sidebar />


      <main className="content">


        <Routes>


          <Route 
            path="/"
            element={<Dashboard />}
          />


          <Route 
            path="/dashboard"
            element={<Dashboard />}
          />


          <Route 
            path="/ai-core"
            element={<AICore />}
          />


          <Route 
            path="/assistant"
            element={<Assistant />}
          />


          <Route 
            path="/terminal"
            element={<Terminal />}
          />


          <Route 
            path="/analytics"
            element={<AnalyticsHUD />}
          />


          <Route 
            path="/memory"
            element={<Memory />}
          />


          <Route 
            path="/settings"
            element={<Settings />}
          />


        </Routes>


      </main>


    </div>

  );

}


export default App;