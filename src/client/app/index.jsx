import React from 'react';
import {render} from 'react-dom';
import Component from './components/component.jsx';
import 'rc-slider/assets/index.css';
import './styles/index.scss';

class App extends React.Component {
  render () {
    return (<div>
    <Component />
    </div>);
  }
}

render(<App/>, document.getElementById('app'));
