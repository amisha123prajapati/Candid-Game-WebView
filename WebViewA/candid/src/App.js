// import React from 'react';
import './App.css';

import React, { useState } from 'react';

const App = () => {

    const [x, setX] = useState(0);

    const incNum = ()  =>{
        setX(x+1);
    }
    const [y, setY] = useState(0);
    const incN = ()  =>{
        setY(y+1);
    }


  return (
    <div className="body">
     <div className="square-img">
     
     <div className="square">

        <div className="container">
            <div className="card">
                <div className="front"></div>
                <div className="back"></div>
            </div>
        </div>


        <div className="container">
            <div className="card">
                <div className="front"></div>
                <div className="back"></div>
            </div>
        </div>

        <div className="container">
            <div className="card">
                <div className="front"></div>
                <div className="back"></div>
            </div>
        </div>

    </div>


       </div>
     <div className="right-part">
     <div className="rect1"><div className="heart" onClick={incNum}></div><div className="heart-num">{x}</div></div>
     <div className="rect2"><div className="heart" onClick={incN}></div><div className="heart-num">{y}</div></div>
     <div className="try-other-game">Try other game?</div>
     <div className="bottom-rect">
       <div id="time">7 June 2021 | 4:30</div>
      <div className="mic"></div>
      <div className="video"></div>
      <div className="thumb"></div>
      <div className="red-button"></div>
      <div className="chat"></div>
      <div className="three-dot"></div>
       </div> 
    </div>
    </div>
    );
}

export default App;
