import React from 'react';
import Slider, { Range } from 'rc-slider';
import DataBoxes from './data-boxes.jsx'

const Control = React.createClass({
  getInitialState() {
    return {
      defaultValue: [0,1],
      min: 0,
      max: 75
    };
  },
  onSliderChange(value) {
    this.setState({
      value,
    });
  },
  render() {
    return (
    <div>
      <div className='slider'>
        <Range
          value={this.state.value}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
          max={this.state.max}
          min={this.state.min}
          defaultValue={this.state.defaultValue}
          allowCross={false}
        />
      </div>
      <div className='data-boxes'>
        <DataBoxes
          indices={this.state.value || this.state.defaultValue}
        />
      </div>
    </div>
    );
  },
});

export default Control;