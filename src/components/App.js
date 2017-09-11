import React, { Component } from 'react';
import Tiyibiaoda from './tiyibiaoda/tiyibiaoda.js'
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>作文评分小程序</h2>
        </div>
        <div className="container">
          <Tiyibiaoda />
        </div>
      </div>
    );
  }
}

export default App;
