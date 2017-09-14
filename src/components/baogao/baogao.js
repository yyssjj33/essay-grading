import React, { Component } from 'react';
import store from '../../store';
class Baogao extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      text: JSON.stringify(store.getState(), null, 2)
    }
    this.handleChongZhi = this.handleChongZhi.bind(this);
    this.handleTijiao = this.handleTijiao.bind(this);
  }

  handleChongZhi() {
    var r = window.confirm("确定要重置该次评分吗？");
    if (r == true) {
      store.dispatch({type: "RESET"});
      this.handleTijiao();
    } else {
      return;
    }
  }

  handleTijiao() {
    this.setState({text: JSON.stringify(store.getState(), null, 4)})
  }
  render() {
    return (
      <div style={{border:"1px solid grey"}}>
        <button onClick={this.handleTijiao}>提交</button>
        <button onClick={this.handleChongZhi}>重置</button>
        <pre>
          {this.state.text}
        </pre>
      </div>
    );
  }
}

export default Baogao;