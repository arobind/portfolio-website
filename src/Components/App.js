import { useRef, useState } from "react";
import "./App.css";
import CardView from "./CardView";
import Navbar from "./Navbar";
import IntroText from "./IntroText";

function App() {
  const newRef = useRef();
  const [darkMode, setDarkMode] = useState(false);
  const [introMode, setIntroMode] = useState(true);
  const modeHandler = () => {
    setDarkMode((prev) => !prev);
  };
  
  
  return (
    <div className={`App ${darkMode ? "App-midnight" : "App-sunshine"}`}>
      <Navbar darkMode={darkMode} modeHandler={modeHandler} introMode = {introMode}/>
      {!introMode && <CardView  darkMode={darkMode} /> }
      {introMode && <IntroText setIntro = {setIntroMode} />}
      
    </div>
  );
}

export default App;
