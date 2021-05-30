import './Navbar.css';

function Navbar(props){

    return(
        <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li onClick={props.modeHandler}>
            {props.darkMode ? (
              <span class="material-icons">light_mode</span>
            ) : (
              <span class="material-icons ">dark_mode</span>
            )}
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;