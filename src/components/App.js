import React, { Component } from 'react';
import Tiyibiaoda from './tiyibiaoda/tiyibiaoda.js';
import Shijianzhicheng from './tiyizhicheng/shijianzhicheng.js';
import Daolianzhicheng from './tiyizhicheng/daolizhicheng.js';
import Quanwentiyizhicheng from './tiyizhicheng/quanwentiyizhicheng.js';
import Yuyanbiaoda from './yuyanbiaoda/yuyanbiaoda.js';
import Zuowenqu from './zuowen/zuowenqu.js';
import Baogao from './baogao/baogao.js';
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
            <h2>题意支撑</h2>
            <Shijianzhicheng />
            <Daolianzhicheng />
            <Quanwentiyizhicheng />
            <Yuyanbiaoda />
            <div style={{height:300}}></div>
          </div>
          <div className="zuowenqu">
            <Zuowenqu />
            <Baogao />
            <div style={{height:300}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
