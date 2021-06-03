import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './IntroText.css';

function IntroText(props) {
    let newRef = useRef();
    useEffect(()=>{
    var typed = new Typed(newRef.current, {
        strings: ["Namaste!!", "My Name is <b>Arobind Maharana</b>", "I am a Frontend Developer"],
        typeSpeed: 60,
        contentType: 'html',
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        onDestroy: ()=>{
          console.log("Finished Typing")
        },
        onComplete: ()=>{ 
          document.querySelector(".typed-cursor").remove();
          setTimeout(()=> props.setIntro(false),1000) }
        
      });
    },[]);

    return(
        <div className="App-introtext-container">
            <span className="App-IntroText" ref= {newRef}></span> 
         </div> 
        
    )
};

export default IntroText;