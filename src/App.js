import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import Accordion from './components/accordion';

class App extends React.Component {
  state = {
    text: []
  }
  componentWillMount() {
    const url = 'https://baconipsum.com/api/?type=meat-and-filler';
    fetch(url)
      .then(response => response.json())
      .then(text => this.setState({ text }));
  }
  render() {
    const Accordions = this.state.text.map((text, index) => (
      <Accordion
        section={`Section ${index + 1}`}
        text={text.substr(0, 200)}
        key={`section-${index}`}
      />
    ));

    return (
      <div className="app">
        {Accordions}
      </div>
    );
  }
}


render(<App />, document.getElementById('app'));

