import React from 'react';
import Typed from 'typed.js';

// asset imports
import './IntroText.css';

export const IntroText = ({ setIntro }) => {
  const newRef = React.useRef();
  
  const strings = [
    'Hello 👋 &amp; Namaste 🙏', 
    'My name is <strong>Arobind Maharana</strong>.', 
    'I\'m a Frontend Developer.'
  ];

  React.useEffect(() => {
    // iife used instead of assignment since the assignment is not being called anywhere.
    (() => (
      new Typed(newRef.current, {
        strings,
        typeSpeed: 60,
        contentType: 'html',
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        onDestroy: () => console.log('Finished Typing'),
        onComplete: () => { 
          document.querySelector('.typed-cursor').remove();
          setTimeout(() => {
            setIntro(false);
            sessionStorage.setItem('flag', true)
          }, 1000);
        }
      })
    ))();
  }, []);

  return (
    <div className="App-introtext-container">
      <span className="App-IntroText" ref={newRef} />
    </div>
  );
};

export default IntroText;
