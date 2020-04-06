import React from 'react';

export const Output = ({ lastPlayed }) => {
  return (
    <div id="output">
      Last Played:
      <br />
      {lastPlayed}
    </div>
  );
};
