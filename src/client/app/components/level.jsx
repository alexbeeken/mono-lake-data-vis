import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, Hint} from 'react-vis';

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
      { "x": 10, "y":  level[9]},
      { "x": 11, "y":  level[10]},
      { "x": 12, "y":  level[11]}
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
        data={lineData[i]}
        onMouseEnter={this.mouseOver}
        onMouseLeae={this.mouseLeave}
        />
      )
    }
    return output
  },

  render() {
      return (
        <div className='data-box'>
          <h3>Water Level by Month</h3>
           <XYPlot
              width={600}
              yDomain={[6371, 6500]}
              height={300}
              onMouseEnter={this.active}
              onMouseLeave={this.inactive}>
              <HorizontalGridLines />
              {this.buildLineSeries()}
              <XAxis title="months" />
              <YAxis title="lake level"/>
            </XYPlot>
        </div>
      );
  }
});

export default Level;
