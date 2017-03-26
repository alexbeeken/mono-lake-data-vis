import React from 'react';
import creekshistories from '../data/creekshistories.jsx'

const CreeksHistoryBox = React.createClass({
  formattedEntries() {
    var output = []
    var entries = this.props.entries
    for (var i = 0; i < entries.length; i++) {
      output.push(<li key={i}>{creekshistories[entries[i]]}</li>)
    }
    return output
  },

  render() {
    return (
      <div className='data-box full'>
        <h4>History of Mono Basin Creeks</h4>
        <div className='history-entries'>
          <ul>{this.formattedEntries()}</ul>
        </div>
      </div>
    )
  }
});

export default CreeksHistoryBox;
