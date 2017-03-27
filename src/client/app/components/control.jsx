import React from 'react';
import Slider, { Range } from 'rc-slider';
import DataBoxes from './data-boxes.jsx'
import library from '../data/years.jsx'

const Control = React.createClass({
  getInitialState() {
    return {
      defaultValue: [0,1],
      min: 0,
      max: 75
    };
  },

  indices() {
    return this.state.value || this.state.defaultValue
  },

  formatYears(years) {
    return (
      years[0] + ' through ' + years[1]
    )
  },

  yearsRanges(indices) {
    return (
      [library[indices[0]]['year'], library[indices[1]]['year']]
    )
  },

  onSliderChange(value) {
    this.setState({
      value,
    });
  },

  fillInYearsArray(yearsRange) {
    var start = parseInt(yearsRange[0])
    var end = parseInt(yearsRange[1])
    var output = []
    for (var i = (start); i <= end; i++) {
      output.push(i)
    }
    return output
  },

  render() {
    return (
    <div>
      <div className='navbar navbar-default navbar-fixed-top'>
        <div className='main-title'>
          <h1>Mono Lake Timeline</h1>
        </div>
        <div className='years-range'>
          <h3>{this.formatYears(this.yearsRanges(this.indices()))}</h3>
        </div>
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
      </div>
      <div className='data-boxes'>
        <DataBoxes
          years={this.fillInYearsArray(this.yearsRanges(this.indices()))}
        />
      </div>
    </div>
    );
  },
});

export default Control;
