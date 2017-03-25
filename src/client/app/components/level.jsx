import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, Hint} from 'react-vis';
import colors from '../data/colors.jsx'

const Level = React.createClass({
  data() {
    const lines = this.props.levels
    let output = []
    for (var i = 0; i < lines.length; i++) {
      output.push(this.buildLine(this.props.years[i], lines[i]))
    }
    return output
  },

  buildLine(year, level) {
    let output = []
    for (var i = 0; i < level.length; i++) {
      if (level[i]) {
        output.push(
          { "x": i+1, "y":  level[i]}
        )
      }
    }
    return output
  },

  color(year) {
    return colors[year % 1941]
  },

  buildLineSeries() {
    var output = []
    var lineData = this.data()
    for (var i = 0; i < lineData.length; i++) {
      output.push(
        <LineSeries
        key={i}
        color={this.color(this.props.years[i])}
        data={lineData[i]}
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
              yDomain={[6371, 6430]}
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
