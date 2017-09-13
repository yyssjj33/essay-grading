import React, { Component } from 'react';
import store from '../../store';
class Baogao extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      text: JSON.stringify(store.getState(), null, 2)
    }
  }
  render() {
    return (
      <div style={{border:"1px solid grey"}}>
        <button onClick={() => {this.setState({text: JSON.stringify(store.getState(), null, 4)})}}>提交</button>
        <pre>
          {this.state.text}
        </pre>
      </div>
    );
  }
}

export default Baogao;