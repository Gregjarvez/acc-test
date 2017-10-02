import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import Accordion from './components/accordion';

const App = () => (
  <div className="app">
    <Accordion section="Section 1" />
    <Accordion section="Section 2" />
    <Accordion section="Section 3" />
  </div>
);

render(<App />, document.getElementById('app'));

