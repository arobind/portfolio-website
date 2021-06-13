import './Navbar.css';

function Navbar(props){

    return(
        <nav className="navbar">
        <ul>
          {!props.introMode && <li><a href="/home">Home</a> </li>}
          {!props.introMode && <li><a href="/projects">Projects</a> </li>}
          <li onClick={props.modeHandler}>
            {props.darkMode ? (
              <span className="material-icons">light_mode</span>
            ) : (
              <span className="material-icons ">dark_mode</span>
            )}
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;