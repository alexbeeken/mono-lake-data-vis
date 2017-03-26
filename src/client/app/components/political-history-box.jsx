import React from 'react';
import politicalhistories from '../data/politicalhistories.jsx'

const PoliticalHistoryBox = React.createClass({
  formattedEntries() {
    var output = []
    var entries = this.props.entries
    for (var i = 0; i < entries.length; i++) {
      output.push(<li key={i}>{politicalhistories[entries[i]]}</li>)
    }
    return output
  },

  render() {
    return (
      <div className='data-box full'>
        <h4>Political History</h4>
        <div className='history-entries'>
          <ul>{this.formattedEntries()}</ul>
        </div>
      </div>
    )
  }
});

export default PoliticalHistoryBox;
