import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const Level = React.createClass({
  data() {
    const lines = this.props.levels
    const years = this.fillInYearsArray(this.props.years)
    let output = []
    for (var i = 0; i < lines.length; i++) {
      output.push(this.buildLine(years[i], lines[i]))
    }
    console.log(output)
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

  buildLine(year, level) {
    return [
      { "x": 1, "y":  level[0]},
      { "x": 2, "y":  level[1]},
      { "x": 3, "y":  level[2]},
      { "x": 4, "y":  level[3]},
      { "x": 5, "y":  level[4]},
      { "x": 6, "y":  level[5]},
      { "x": 7, "y":  level[6]},
      { "x": 8, "y":  level[7]},
      { "x": 9, "y":  level[8]},
      { "x": 10, "y":  level[9]}
    ]
  },

  buildLineSeries() {
    var output = []
    var lineData = this.data()
    for (var i = 0; i < lineData.length; i++) {
      output.push(
        <LineSeries
        color="red"
        data={lineData[i]}/>
      )
    }
    return output
  },
  render() {
    console.log(this.props.levels.length)
      return (<XYPlot
              width={600}
              yDomain={[6371, 6382]}
              height={300}>
              <HorizontalGridLines />
              {this.buildLineSeries()}
              <XAxis title="months" />
              <YAxis title="lake level"/>
            </XYPlot>);
  }
});

export default Level;
