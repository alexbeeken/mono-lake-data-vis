import React from 'react';
import {render} from 'react-dom';
import Control from './components/control.jsx';
import Header from './components/header.jsx';
import 'rc-slider/assets/index.css';
import './styles/index.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Control />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
