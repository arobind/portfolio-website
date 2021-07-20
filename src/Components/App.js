import { useState } from "react";
import { 
  Redirect, 
  Route, 
  Switch, 
  withRouter 
} from "react-router-dom";

// component imports
import CardView from "./CardView";
import Navbar from "./Navbar";
import Projects from "./Projects";

// asset imports
import "./App.css";

const App = props => {
  const [darkMode, setDarkMode] = useState(false);
  const [introMode, setIntroMode] = useState(!sessionStorage.getItem('flag'));
  
  console.log(sessionStorage.getItem('flag'));
  const modeHandler = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const component = props.location.pathname.includes('portfolio-website') ? (
    <div className={`App App-${darkMode ? 'midnight' : 'sunshine'}`}>
      <Navbar darkMode={darkMode} modeHandler={modeHandler} introMode={introMode}/>
      <Switch>
        <Route exact path="/projects">
          <Projects setIntroMode={setIntroMode} />
        </Route>
        <Route path="*">
          <CardView darkMode={darkMode} introMode={introMode} setIntroMode={setIntroMode}/>
        </Route>
      </Switch>
    </div>
  ) : <Redirect to="/" />;
  
  return component;
}

export default withRouter(App);
