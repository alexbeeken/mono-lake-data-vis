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

const LevelContinuous = React.createClass({
  data() {
    const lines = this.props.levels
    let output = []
    let index = 0
    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        output.push({ "x": index, "y":  lines[i][j]})
        index++
      }
    }
    return output
  },

  years() {
    return (this.props.years)
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
              yDomain={[6371, 6382]}
              height={300}>
              <HorizontalGridLines />
              {this.buildLineSeries()}
              <XAxis title="months" />
              <YAxis title="lake level"/>
            </XYPlot>);
  }
});

export default LevelContinuous;
