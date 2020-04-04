import React from 'react';

export const DrumPad = ({ letter, handleClick }) => {
  return (
    <div className="drum-pad" onClick={handleClick}>
      {letter}
    </div>
  );
};
