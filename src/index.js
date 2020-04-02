import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {
  return (
    <div id="drum-machine">
      <h1>Hello Drum Machine</h1>
      <div id="display">
        <div class="drum-pad">Q</div>
        <div class="drum-pad">W</div>
        <div class="drum-pad">E</div>
        <div class="drum-pad">A</div>
        <div class="drum-pad">S</div>
        <div class="drum-pad">D</div>
        <div class="drum-pad">Z</div>
        <div class="drum-pad">X</div>
        <div class="drum-pad">C</div>
      </div>

      <div id="output">Key pressed</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
