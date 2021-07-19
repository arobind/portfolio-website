// component imports
import IntroText from './IntroText';

// asset imports
import './IntroText.css';
import './CardView.css';
import image from '../Assets/Capture_square.jpg';

export const WrapperLink = ({ link, children }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const CardView = ({ introMode, setIntroMode, darkMode }) => (
  <>
    {!!introMode && <IntroText setIntro={setIntroMode} />}
    {!introMode && <div className={`card card-${darkMode ? 'midnight' : 'sunshine'}`}>
      <div className="card-content">
        <div className="card-intro">
          <div className="card-image-container">
            <img src={image} alt="" className="card-img" />
          </div>
          <div className="card-header">
            <h2 className="card-mainheader">AROBIND MAHARANA</h2>
            <h4 className="card-subheader">Front-end Developer</h4>
            <div className="card-contact">
              <WrapperLink link="https://www.linkedin.com/in/arobind-maharana/">
                <i className="fab fa-linkedin" />
              </WrapperLink>
              <WrapperLink link="https://github.com/arobind">
                <i className="fab fa-github-square"></i>
              </WrapperLink>
              <WrapperLink link="mailto:arobind.m@gmail.com?subject=Contact%20from%20Portfolio&body=Description">
                <i className="fas fa-envelope-square"></i>
              </WrapperLink>
            </div>
          </div>
        </div>
        <div className="card-summary">
          <span >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </div>}
  </>
);

export default CardView;
