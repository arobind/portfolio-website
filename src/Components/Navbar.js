import './Navbar.css';

function Navbar(props){

    return(
        <nav className="navbar">
        <ul>
          {!props.introMode && <li>Home</li>}
          {!props.introMode && <li>Projects</li>}
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