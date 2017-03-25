import React from 'react';
import Level from './level.jsx'
import HistoryBox from './history-box.jsx'
import LevelContinuous from './level-continuous.jsx'
import library from '../data/years.jsx'

const Description = React.createClass({
  levelsForIndices(indices) {
    var output = []
    for (var i = indices[0]; i <= indices[1]; i++) {
      output.push(library[i]['levels'])
    }
    return output
  },

  yearsRanges(indices) {
    return (
      [library[indices[0]]['year'], library[indices[1]]['year']]
    )
  },

  formatYears(years) {
    return (
      years[0] + ' through ' + years[1]
    )
  },

  isUniqueValue(array, int) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == int) {
        return false
      }
    }
    return true
  },

  historiesRanges(indices) {
    var output = []
    for (var i = indices[0]; i < indices[1]; i++) {
        var history = library[i]['history']
        for (var j = 0; j < history.length; j++) {
          if (this.isUniqueValue(output, history[j])) {
            output.push(history[j])
          }
        }
    }
    return output
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

  renderHistory() {
    if (this.historiesRanges(this.props.indices).length > 0) {
      return(
        <div className='data-box full'>
        <h3>History</h3>
        <HistoryBox entries={this.historiesRanges(this.props.indices)} />
        </div>
      )
    }
  },

  render() {
    return (
    <div>
      <h2>{this.formatYears(this.yearsRanges(this.props.indices))}</h2>
      {this.renderHistory()}
      <div className='data-box'>
        <h3>Water Level by Month</h3>
        <Level levels={this.levelsForIndices(this.props.indices)} years={this.yearsRanges(this.props.indices)}/>
      </div>
      <div className='data-box'>
        <h3>Water Level Continuous</h3>
        <LevelContinuous levels={this.levelsForIndices(this.props.indices)} years={this.yearsRanges(this.props.indices)}/>
      </div>
    </div>
    );
  }
});

export default Description;
