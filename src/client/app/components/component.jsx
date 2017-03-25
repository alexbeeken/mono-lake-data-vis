import React from 'react';
import Slider, { Range } from 'rc-slider';
import Description from './description.jsx'

const Component = React.createClass({
  getInitialState() {
    return {
      defaultValue: [0,1],
      min: 0,
      max: 18,
      dots: true
    };
  },
  onSliderChange(value) {
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
        <Range
          value={this.state.value}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
          max={this.state.max}
          min={this.state.min}
          defaultValue={this.state.defaultValue}
          dots={this.state.dots}
          allowCross={false}
        />
      </div>
      <div className='description'>
        <Description
          indices={this.state.value || this.state.defaultValue}
        />
      </div>
    </div>
    );
  },
});

export default Component;
