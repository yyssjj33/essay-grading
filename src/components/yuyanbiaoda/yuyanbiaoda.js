import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {yuyanbiaodaActions} from '../../reducers/yuyanbiaoda.js';
class Yuyanbiaoda extends Component {

  constructor(props) { 
    super(props);
    this.handleChangeJiegou = this.handleChangeJiegou.bind(this);
    this.handleChangeSilu = this.handleChangeSilu.bind(this);
    this.handleChangeYuyan = this.handleChangeYuyan.bind(this);
    this.handleChangeZonghe = this.handleChangeZonghe.bind(this);
  }

  handleChangeJiegou(e) {
    this.props.changeJiegou(e.target.value);
  }
  handleChangeSilu(e) {
    this.props.changeSilu(e.target.value);
  }
  handleChangeYuyan(e) {
    this.props.changeYuyan(e.target.value);
  }
  handleChangeZonghe(e) {
    this.props.changeZonghe(e.target.value);
  }
  render() {
    const {jiegou, silu, yuyan, zonghe} = this.props.yuyanbiaoda;
    return (
      <div>
        <h2>语言表达</h2>
        <p>1.对本文的结构作判断: </p>
        <div onChange={this.handleChangeJiegou}>
          <input type="radio" id="jiegouwanzheng" name="q14" checked={jiegou==="jiegouwanzheng"} value="jiegouwanzheng" onChange={()=>{}}/>
          <label htmlFor="jiegouwanzheng">结构完整</label>
          <input type="radio" id="jiegoujiaowanzheng" name="q14" checked={jiegou==="jiegoujiaowanzheng"} value="jiegoujiaowanzheng" onChange={()=>{}}/>
          <label htmlFor="jiegoujiaowanzheng">结构较完整</label>
          <input type="radio" id="jiegouhunluan" name="q14" checked={jiegou==="jiegouhunluan"} value="jiegouhunluan" onChange={()=>{}}/>
          <label htmlFor="jiegouhunluan">结构混乱</label>
        </div>
        <p>2.对本文的思路作判断: </p>
        <div onChange={this.handleChangeSilu}>
          <input type="radio" id="siluqingxi" name="q15" checked={silu==="siluqingxi"} value="siluqingxi" onChange={()=>{}}/>
          <label htmlFor="siluqingxi">思路清晰</label>
          <input type="radio" id="silujibenqingxi" name="q15" checked={silu==="silujibenqingxi"} value="silujibenqingxi" onChange={()=>{}}/>
          <label htmlFor="silujibenqingxi">思路基本清晰</label>
          <input type="radio" id="siluhunluan" name="q15" checked={silu==="siluhunluan"} value="siluhunluan" onChange={()=>{}}/>
          <label htmlFor="siluhunluan">思路混乱</label>
        </div>
        <p>3.对本文的语言作判断: </p>
        <div onChange={this.handleChangeYuyan}>
          <input type="radio" id="yuyanliuchange" name="q16" checked={yuyan==="yuyanliuchange"} value="yuyanliuchange" onChange={()=>{}}/>
          <label htmlFor="yuyanliuchange">语言流畅</label>
          <input type="radio" id="yuyantongshun" name="q16" checked={yuyan==="yuyantongshun"} value="yuyantongshun" onChange={()=>{}}/>
          <label htmlFor="yuyantongshun">语言通顺</label>
          <input type="radio" id="yuyanbutong" name="q16" checked={yuyan==="yuyanbutong"} value="yuyanbutong" onChange={()=>{}}/>
          <label htmlFor="yuyanbutong">语言不通，影响语意表达</label>
        </div>
        <p>4.综合全文“语言表达”情况判断: </p>
        <div onChange={this.handleChangeZonghe}>
          <input type="radio" id="youxiu" name="q17" checked={zonghe==="youxiu"} value="youxiu" onChange={()=>{}}/>
          <label htmlFor="youxiu">优秀</label>
          <input type="radio" id="hege" name="q17" checked={zonghe==="hege"} value="hege" onChange={()=>{}}/>
          <label htmlFor="hege">合格</label>
          <input type="radio" id="buhege" name="q17" checked={zonghe==="buhege"} value="buhege" onChange={()=>{}}/>
          <label htmlFor="buhege">不合格</label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    yuyanbiaoda: state.yuyanbiaoda
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeJiegou: bindActionCreators(yuyanbiaodaActions.changeJiegou, dispatch),
    changeSilu: bindActionCreators(yuyanbiaodaActions.changeSilu, dispatch),
    changeYuyan: bindActionCreators(yuyanbiaodaActions.changeYuyan, dispatch),
    changeZonghe: bindActionCreators(yuyanbiaodaActions.changeZonghe, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Yuyanbiaoda);