import React, { useState } from 'react';
import './App.css';
import Main from './Main'; // Renamed 'Main' to 'Front' for clarity
import Backside from './Backside';
import rotate from '../Media/rotate.svg';

function App() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="App">
            <div id="cardfb" className={`card ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-face card-front">
                    <Main />
                </div>
                <div className="card-face card-back">
                    <Backside />
                </div>
            </div>
            <img src={rotate} alt="rotate" id="rotate" onClick={handleFlip} />
        </div>
    );
}

export default App;
