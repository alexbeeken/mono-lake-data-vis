import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, HorizontalBarSeries, Hint} from 'react-vis';
import birds1998 from '../data/1998birdcounts.jsx'

const BirdCounts = React.createClass({
  data() {
    const years = this.props.years
    let output = []
    for (var i = 0; i < years.length; i++) {
      if (years[i] == 1998) {
        output.push(this.buildBar(years[i], birds1998))
      }
      if (years[i] == 1999) {

      }
      if (years[i] == 2000) {

      }
    }
    return output
  },

  buildBar(year, birds) {
    let output = []
    for (var i = 0; i < birds.length; i++) {
      if (birds[i]) {
        console.log(birds[i])
        output.push(
          { "x": birds[i]['COUNT'], "y": i, }
        )
      }
    }
    return output
  },

  tickFormatter(tick) {
    return birds1998[tick]['SPECIES']
  },

  buildBarSeries() {
    var output = []
    var barData = this.data()
    for (var i = 0; i < barData.length; i++) {
      output.push(
        <HorizontalBarSeries
          key={i}
          data={barData[i]}
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
              <YAxis title='species' tickFormat={this.tickFormatter} tickSizeOuter={1} tickTotal={53} tickLabelAngle={-45}/>
            </XYPlot>
          </div>
        </div>
      );
  }
});

export default BirdCounts;
