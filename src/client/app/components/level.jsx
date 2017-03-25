import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const colors = [
  '#000000',
  '#2E00E5',
  '#7100E1',
  '#B200DD',
  '#D900C2',
  '#D5007E',
  '#D2003D',
  '#CE0100',
  '#CA3E00',
  '#C67800',
  '#C2B100',
  '#96BF00',
  '#D8FF4C',
  '#8E9966',
  '#20F3EE',
  '#F3202D',
  '#CA6B3F',
  '#BBAA5D',
  '#91BB5D',
  '#475832'
]

const Level = React.createClass({
  data() {
    const lines = this.props.levels
    let output = []
    for (var i = 0; i < lines.length; i++) {
      output.push(this.buildLine(this.years()[i], lines[i]))
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

  years() {
    return (this.props.years)
  },

  color(year) {
    return colors[year % 1979]
  },

  buildLineSeries() {
    var output = []
    var lineData = this.data()
    for (var i = 0; i < lineData.length; i++) {
      output.push(
        <LineSeries
        key={i}
        color={this.color(this.years()[i])}
        data={lineData[i]}/>
      )
    }
    return output
  },
  render() {
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
