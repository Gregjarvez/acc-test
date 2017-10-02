import React from 'react';
import Toggler from './toggler';

class Accordion extends React.Component {
  state = {
    isOpened: false,
    text: ''
  }

  componentWillMount() {
    const url = 'https://baconipsum.com/api/?type=all-meat&sentences=2&start-with-lorem=1';
    window.fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ text: data.join() }));
  }

  onTogglerClick = () => {
    this.setState((prev) => {
      return { isOpened: !prev.isOpened };
    });
  }

  render() {
    return (
      <div className="acccordion">
        <button
          className={`accordion--button ${this.state.isOpened && 'accordion--button-pale'}`}
          onClick={this.onTogglerClick}
        >
          <Toggler
            isOpened={this.state.isOpened}
          />
        </button>
        <p className={`accordion--text ${!this.state.isOpened && 'accordion--text-isClosed'}`}>
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default Accordion;
