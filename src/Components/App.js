import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const modeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`App ${darkMode ? "App-midnight" : "App-sunshine"}`}>
      <Navbar darkMode={darkMode} modeHandler={modeHandler} />
    </div>
  );
}

export default App;
