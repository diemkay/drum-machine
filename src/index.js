import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { DrumController } from './DrumController';

const App = () => {
  return <DrumController />;
};

ReactDOM.render(<App />, document.getElementById('root'));
