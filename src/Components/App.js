import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const modeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`App ${darkMode ? "App-Midnight" : "App-Sunshine"}`}>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li onClick={modeHandler}>
            {darkMode ? (
              <span class="material-icons">light_mode</span>
            ) : (
              <span class="material-icons ">dark_mode</span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
