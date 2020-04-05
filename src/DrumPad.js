import React from 'react';

export const DrumPad = ({ letter, handleClick, soundId, path }) => {
  return (
    <div className="drum-pad" onClick={handleClick}>
      {letter}
      {path && <audio src={path} id={soundId} />}
    </div>
  );
};
