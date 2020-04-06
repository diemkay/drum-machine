import React from 'react';
import { Display } from './Display';
import { Output } from './Output';

export const DrumView = ({ playSound, keys, soundAssignment, lastPlayed }) => {
  return (
    <div id="drum-machine">
      <h1>Hello Drum Machine</h1>
      <Display playSound={playSound} keys={keys} soundAssignment={soundAssignment} />
      <Output lastPlayed={lastPlayed} />
    </div>
  );
};
