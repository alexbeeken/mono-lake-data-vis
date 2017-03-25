import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const Level = React.createClass({
  data: function() {
    return [
    { "x": 0, "y":  this.props.levels[0]},
    { "x": 1, "y":  this.props.levels[1]},
    { "x": 2, "y":  this.props.levels[2]},
    { "x": 3, "y":  this.props.levels[3]},
    { "x": 4, "y":  this.props.levels[4]},
    { "x": 5, "y":  this.props.levels[5]},
    { "x": 6, "y":  this.props.levels[6]},
    { "x": 7, "y":  this.props.levels[7]},
    { "x": 8, "y":  this.props.levels[8]},
    { "x": 9, "y":  this.props.levels[9]},
    { "x": 10, "y":  this.props.levels[10]},
    { "x": 11, "y":  this.props.levels[11]}
  ]},
  render: function() {
      return (<XYPlot
              width={300}
              height={300}>
              <HorizontalGridLines />
              <LineSeries
                color="red"
                data={this.data()}/>
              <XAxis title="X" />
              <YAxis />
            </XYPlot>);
  }
});

export default Level;
