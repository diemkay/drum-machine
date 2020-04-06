import React from 'react';
import { DrumView } from './DrumView';
import { getSound } from './getSound';

const KEYS = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

export class DrumController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyAssignments: {
        Q: 'bass-drum-short',
        W: 'bass-drum-long',
        E: 'conga-short',
        A: 'cymbal',
        S: 'snare-drum',
        D: 'maracas',
        Z: 'cowbell',
        X: 'open-hi-hat',
        C: 'closed-hi-hat',
      },

      lastPlayed: null,
    };
  }

  playSound = currentLetter => {
    const soundToPlay = this.state.keyAssignments[currentLetter];

    if (!soundToPlay) {
      return;
    }

    const audioTag = document.getElementById(soundToPlay);

    audioTag.play();
  };

  componentDidMount = () => {
    window.addEventListener('keydown', event => {
      const normalizedKey = event.key.toUpperCase();
      if (KEYS.includes(normalizedKey)) {
        this.playSound(normalizedKey);
      }
    });
  };

  render() {
    const soundAssignment = {};
    Object.keys(this.state.keyAssignments).forEach(key => {
      soundAssignment[key] = getSound(this.state.keyAssignments[key]) || {};
    });

    console.log(soundAssignment);

    return (
      <DrumView
        playSound={this.playSound}
        keys={KEYS}
        soundAssignment={soundAssignment}
      />
    );
  }
}
