import { useState } from "react";
import "./App.css";
import CardView from "./CardView";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { Route, Switch } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [introMode, setIntroMode] = useState(!sessionStorage.getItem('flag'));
  
  console.log(sessionStorage.getItem('flag'));
  const modeHandler = () => {
    setDarkMode((prev) => !prev);
  };
  
  
  return (
    <div className={`App ${darkMode ? "App-midnight" : "App-sunshine"}`}>
      <Navbar darkMode={darkMode} modeHandler={modeHandler} introMode = {introMode}/>
      
      <Switch>
        <Route exact path="/projects">
          <Projects setIntroMode = {setIntroMode} />
        </Route>
        <Route path="*">
          <CardView darkMode={darkMode} introMode ={introMode} setIntroMode = {setIntroMode}/>
        </Route> 
      </Switch>
      
    </div>
  );
}

export default App;
