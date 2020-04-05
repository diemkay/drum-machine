import React from 'react';
import { DrumPad } from './DrumPad';

export const Display = ({ playSound, keys, soundAssignment }) => {
  return (
    <div id="display">
      {keys.map(key => (
        <DrumPad
          key={key}
          letter={key}
          handleClick={() => playSound(key)}
          path={soundAssignment[key].path}
          soundId={soundAssignment[key].id}
        />
      ))}
    </div>
  );
};
