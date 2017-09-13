import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {quanwentiyizhichengActions} from '../../reducers/quanwentiyizhicheng.js';

class Quanwentiyizhicheng extends Component {
  constructor(props) { 
    super(props);
    this.handleChangeQuanwentiyizhicheng = this.handleChangeQuanwentiyizhicheng.bind(this);
  }

  handleChangeQuanwentiyizhicheng(e) {
    this.props.changeQuanwentiyizhicheng(e.target.value);
  }

  render() {
    const {quanwentiyizhicheng} = this.props;
    return (
      <div>
        <p>{`(三) 综合全文“题意支撑”效果判断: `}</p>
        <div onChange={this.handleChangeQuanwentiyizhicheng}>
          <input type="radio" id="qiadang12" name="q13" checked={quanwentiyizhicheng==="zhichengqiadang"} value="zhichengqiadang" onChange={()=>{}}/>
          <label htmlFor="qiadang12">支撑恰当</label>
          <input type="radio" id="youquexian12" name="q13" checked={quanwentiyizhicheng==="youquexian"} value="youquexian" onChange={()=>{}}/>
          <label htmlFor="youquexian12">支撑有缺陷</label>
          <input type="radio" id="zhichengcuowu12" name="q13" checked={quanwentiyizhicheng==="zhichengcuowu"} value="zhichengcuowu" onChange={()=>{}}/>
          <label htmlFor="zhichengcuowu12">支撑错误</label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quanwentiyizhicheng: state.quanwentiyizhicheng
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeQuanwentiyizhicheng: bindActionCreators(quanwentiyizhichengActions.changeQuanwentiyizhicheng, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quanwentiyizhicheng);