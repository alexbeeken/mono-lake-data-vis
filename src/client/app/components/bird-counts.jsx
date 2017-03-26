import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries, Hint} from 'react-vis';
import birds1998 from '../data/1998birdcounts.jsx'

const BirdCounts = React.createClass({
  data() {
    const years = this.props.years
    let output = []
    for (var i = 0; i < years.length; i++) {
      console.log(years)
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
        output.push(
          { "x": i+1, "y":  birds[i]}
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
        <VerticalBarSeries
          key={i}
          data={barData[i]}
        />
      )
    }
    return output
  },

  render() {
      return (
        <div className='data-box full'>
          <h3>Water Level by Month</h3>
           <XYPlot
              width={1000}
              yDomain={[6371, 6430]}
              height={300}
              onMouseEnter={this.active}
              onMouseLeave={this.inactive}>
              <HorizontalGridLines />
              {this.buildBarSeries()}
              <XAxis title="months" tickFormat={this.tickFormatter}/>
              <YAxis title="lake level"/>
            </XYPlot>
        </div>
      );
  }
});

export default BirdCounts;
