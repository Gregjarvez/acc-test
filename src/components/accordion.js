import React from 'react';
import PropTypes from 'prop-types';
import Toggler from './toggler';

class Accordion extends React.Component {
  state = {
    isOpened: false,
  };

  onTogglerClick = () => {
    this.setState((prev) => {
      return { isOpened: !prev.isOpened };
    });
  };


  render() {
    return (
      <div className="acccordion ">
        <button
          className={`accordion--button ${this.state.isOpened
                                               && 'accordion--button-pale'}`}
          onClick={this.onTogglerClick}
        >
          <span className="accordion--section">{ this.props.section }</span>
          <Toggler
            isOpened={this.state.isOpened}
          />
        </button>
        <p className={`accordion--text ${!this.state.isOpened
                                            && 'accordion--text-isClosed'}`}
        >
          { this.props.text }
        </p>
      </div>
    );
  }
}

Accordion.propTypes = {
  section: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Accordion;
