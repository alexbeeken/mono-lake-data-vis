import React from 'react';
import WaterLevel from './water-level.jsx'
import PoliticalHistoryBox from './political-history-box.jsx'
import WaterLevelContinuous from './water-level-continuous.jsx'
import BirdCounts from './bird-counts.jsx'
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
    var years = this.fillInYearsArray(this.yearsRanges(this.props.indices))
    for (var i = indices[0]; i <= indices[1]; i++) {
        let history = library[i]['history']
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

  renderPoliticalHistory() {
    if (this.historiesRanges(this.props.indices).length > 0) {
      return(
        <PoliticalHistoryBox entries={this.historiesRanges(this.props.indices)} />
      )
    }
  },

  renderBirdCounts() {
    const years = this.yearsRanges(this.props.indices)
    const firstYear = years[0]
    const endYear = years[1]
    if ((firstYear <= 1998 && endYear > 1997) ||
        (firstYear <= 1999 && endYear > 1998) ||
        (firstYear <= 2000 && endYear > 1999)) {
      return(
        <BirdCounts years={this.fillInYearsArray(years)}/>
      )
    }
  },

  render() {
    return (
    <div>
      <h2>{this.formatYears(this.yearsRanges(this.props.indices))}</h2>
      <WaterLevel levels={this.levelsForIndices(this.props.indices)} years={this.fillInYearsArray(this.yearsRanges(this.props.indices))}/>
      <WaterLevelContinuous levels={this.levelsForIndices(this.props.indices)} years={this.fillInYearsArray(this.yearsRanges(this.props.indices))}/>
      {this.renderPoliticalHistory()}
      {this.renderBirdCounts()}
    </div>
    );
  }
});

export default Description;
