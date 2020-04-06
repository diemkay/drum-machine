const soundBank = {
  'bass-drum-long': {
    id: 'bass-drum-long',
    path: './sounds/E808_BD[long]-16.wav',
    name: 'Bass Drum (Long)',
  },

  'bass-drum-short': {
    id: 'bass-drum-short',
    path: './sounds/E808_BD[short]-03.wav',
    name: 'Bass Drum (Short)',
  },

  'conga-short': {
    id: 'conga-short',
    path: './sounds/E808_HC-07.wav',
    name: 'Conga (Short)',
  },
  cymbal: {
    id: 'cymbal',
    path: './sounds/E808_CY-08.wav',
    name: 'Cymbal',
  },
  'snare-drum': {
    id: 'snare-drum',
    path: './sounds/E808_SD-03.wav',
    name: 'Snare Drum',
  },
  maracas: {
    id: 'maracas',
    path: './sounds/E808_MA-10.wav',
    name: 'Maracas',
  },
  cowbell: {
    id: 'cowbell',
    path: './sounds/E808_CB-06.wav',
    name: 'Cowbell',
  },

  'open-hi-hat': {
    id: 'open-hi-hat',
    path: './sounds/E808_OH-03.wav',
    name: 'Open Hi Hat',
  },

  'closed-hi-hat': {
    id: 'closed-hi-hat',
    path: './sounds/E808_CH-07.wav',
    name: 'Closed Hi Hat',
  },
};

export const getSound = soundId => {
  return soundBank[soundId];
};

export const getSoundName = soundId => {
  return soundBank[soundId].name;
};
