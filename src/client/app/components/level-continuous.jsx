import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const partialYears = [
  0.083,
  0.166,
  0.249,
  0.332,
  0.415,
  0.498,
  0.581,
  0.664,
  0.747,
  0.830,
  0.913,
  0.996,
]

const LevelContinuous = React.createClass({
  data() {
    const lines = this.props.levels
    let output = []
    let years = this.props.years
    let index = 0
    for (var i = 0; i < years.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        if (lines[i][j]) {
          output.push({ "x": years[i] + partialYears[j], "y":  lines[i][j]})
        }
      }
    }
    return output
  },

  buildLineSeries() {
    var output = []
    var lineData = this.data()
    return(
      <LineSeries
      color='black'
      data={lineData}/>
    )
    return output
  },
  render() {
      return (<XYPlot
              width={600}
              yDomain={[6371, 6430]}
              height={300}>
              <HorizontalGridLines />
              {this.buildLineSeries()}
              <XAxis title="months" />
              <YAxis title="lake level"/>
            </XYPlot>);
  }
});

export default LevelContinuous;
