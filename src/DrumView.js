import React from 'react';
import { Display } from './Display';
import { Output } from './Output';

export const DrumView = ({ playSound, keys }) => {
  return (
    <div id="drum-machine">
      <h1>
        Hello Drum Machine{' '}
        <span aria-label="space invader" role="img">
          👾
        </span>
      </h1>
      <Display playSound={playSound} keys={keys} />
      <Output />
    </div>
  );
};
