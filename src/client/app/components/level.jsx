import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const Level = React.createClass({
  data() {
    const lines = this.props.levels
    let output = []
    for (var i = 0; i < lines.length; i++) {
      output = output.concat(this.buildLine(lines[i]))
    }
    return output
  },
  buildLine(level) {
    return [
      { "x": 0, "y":  level[0]},
      { "x": 1, "y":  level[1]},
      { "x": 2, "y":  level[2]},
      { "x": 3, "y":  level[3]},
      { "x": 4, "y":  level[4]},
      { "x": 5, "y":  level[5]},
      { "x": 6, "y":  level[6]},
      { "x": 7, "y":  level[7]},
      { "x": 8, "y":  level[8]},
      { "x": 9, "y":  level[9]},
      { "x": 10, "y":  level[10]},
      { "x": 11, "y":  level[11]}
    ]
  },
  render: function() {
      return (<XYPlot
              width={600}
              yDomain={[6371, 6382]}
              height={300}>
              <HorizontalGridLines />
              <LineSeries
                color="red"
                data={this.data()}/>
              <XAxis title="months" />
              <YAxis title="lake level"/>
            </XYPlot>);
  }
});

export default Level;
