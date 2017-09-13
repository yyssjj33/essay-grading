import React, { Component } from 'react';
import Tiyibiaoda from './tiyibiaoda/tiyibiaoda.js';
import Shijianzhicheng from './tiyizhicheng/shijianzhicheng.js';
import Zuowenqu from './zuowen/zuowenqu.js';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>作文评分小程序</h2>
        </div>
        <div className="container">
          <div className="pingfenqu">
            <Tiyibiaoda />
            <Shijianzhicheng />
            <div style={{height:300}}></div>
          </div>
          <div className="zuowenqu">
            <Zuowenqu />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
