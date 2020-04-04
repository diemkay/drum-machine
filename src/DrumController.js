import React from 'react';
import { DrumView } from './DrumView';

const KEYS = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

export class DrumController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Q: 'bass-drum-short', // getSound("id")
      W: 'bass-drum-long',
    };

    this.playSound = this.playSound.bind(this);
  }

  playSound = currentLetter => {
    console.log(`Clicked ${currentLetter}`);
  };

  render() {
    return <DrumView playSound={this.playSound} keys={KEYS} />;
  }
}
