import React from 'react';

export const DrumPad = ({ letter, handleClick, soundId, path }) => {
  return (
    <div className="drum-pad">
      <button className="button" onClick={handleClick}>
        <audio src={path} id={soundId} />
        {letter}
      </button>
    </div>
  );
};
