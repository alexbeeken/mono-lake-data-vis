import React from 'react';
import histories from '../data/histories.jsx'

const HistoryBox = React.createClass({
  formattedEntries() {
    var output = []
    var entries = this.props.entries
    for (var i = 0; i < entries.length; i++) {
      output.push(<li key={i}>{histories[entries[i]]}</li>)
    }
    return output
  },
  render() {
    return (
      <div className='history-entries'>
        <ul>{this.formattedEntries()}</ul>
      </div>
    )
  }
});

export default HistoryBox;
