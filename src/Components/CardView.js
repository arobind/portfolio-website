import "./CardView.css";
import image from "../Assets/Capture_square.jpg";

import IntroText from "./IntroText";
import './IntroText.css';
function CardView(props) {

  return (
    <>
    {(props.introMode) && <IntroText setIntro = {props.setIntroMode} />}
    {(!props.introMode) && <div className={`card ${props.darkMode ? "card-midnight" : "card-sunshine"}`}>
      <div className="card-content">
        <div className="card-intro">
          <div className="card-image-container">
          <img src={image} alt="" className="card-img" />
          </div>
          <div className="card-header">
            <h2 className="card-mainheader">AROBIND MAHARANA</h2>
            <h4 className="card-subheader">Front-end Developer</h4>
            <div className="card-contact">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github-square"></i>
            <i className="fas fa-envelope-square"></i>
            </div>
          </div>
        </div>
        <div className="card-summary">
          <span >
            Hi, I'm a passionate Frontend Developer with more than 3 years of experience building experiences for the User on the Web. I'm highly skilled in JavaScript & React.
            Apart from that, I can always be be found on my couch lazing around, writing code, sipping coffee, eating shawarma!
          </span>
        </div>
      </div>
    </div>}
    </>
  );
}

export default CardView;
