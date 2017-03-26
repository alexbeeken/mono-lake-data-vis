import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, HorizontalBarSeries, Hint} from 'react-vis';
import birds from '../data/birdcounts.jsx'
import colors from '../data/colors.jsx'

const BirdCounts = React.createClass({
  data() {
    const years = this.props.years
    let output = []
    for (var i = 0; i < years.length; i++) {
      if (years[i] == 1998 || years[i] == 1999 || years[i] == 2000) {
        output.push(this.buildBar(years[i], birds))
      }
    }
    return output
  },

  buildBar(year, birdsCount) {
    let output = []
    for (var i = 0; i < birdsCount.length; i++) {
      if (birdsCount[i]) {
        output.push(
          { "x": birdsCount[i]['COUNT'][year], "y": i, }
        )
      }
    }
    return output
  },

  tickFormatter(tick) {
    return birds[tick]['SPECIES']
  },

  buildBarSeries() {
    var output = []
    var barData = this.data()
    for (var i = 0; i < barData.length; i++) {
      output.push(
        <HorizontalBarSeries
          key={i}
          data={barData[i]}
          color={colors[i]}
        />
      )
    }
    return output
  },

  render() {
      return (
        <div className='data-box'>
          <h3>Bird Counts</h3>
          <div className='birds'>
            <XYPlot
              width={550}
              xDomain={[0, 2400]}
              height={700}
              onMouseEnter={this.active}
              onMouseLeave={this.inactive}>
              <HorizontalGridLines />
              {this.buildBarSeries()}
              <XAxis title='count'/>
              <YAxis title='species'
                tickFormat={this.tickFormatter}
                tickSizeOuter={1}
                tickTotal={32}
                tickLabelAngle={-45}/>
            </XYPlot>
          </div>
        </div>
      );
  }
});

export default BirdCounts;
