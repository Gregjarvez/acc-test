import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import Accordion from './components/accordion';

const App = () => (
  <div className="app">
    <Accordion />
    <Accordion />
    <Accordion />
  </div>
);

render(<App />, document.getElementById('app'));

