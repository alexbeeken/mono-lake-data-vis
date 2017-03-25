import React from 'react';
import Slider, { Range } from 'rc-slider';
import Description from './description.jsx'

function log(value) {
  console.log(value); //eslint-disable-line
}

const Component = React.createClass({
  getInitialState() {
    return {
      defaultValue: 0,
      min: 0,
      max: 18,
      dots: true
    };
  },
  onSliderChange(value) {
    log(value);
    this.setState({
      value,
    });
  },
  onAfterChange(value) {
    console.log(value);
  },
  render() {
    return (
    <div>
      <div className='slider'>
        <Slider
          value={this.state.value}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
          max={this.state.max}
          min={this.state.min}
          defaultValue={this.state.defaultValue}
          dots={this.state.dots}
        />
      </div>
      <div className='description'>
        <Description
          index={this.state.value || this.state.defaultValue}
        />
      </div>
    </div>
    );
  },
});

export default Component;
