const soundBank = {
  'bass-drum-long': {
    id: 'bass-drum-long',
    path: './src/sounds/E808_BD[long]-16.wav',
    name: 'Bass Drum (Long)',
  },

  'bass-drum-short': {
    id: 'bass-drum-short',
    path: './src/sounds/E808_BD[short]-03.wav',
    name: 'Bass Drum (Short)',
  },
};

export const getSound = id => {
  return soundBank[id];
};
