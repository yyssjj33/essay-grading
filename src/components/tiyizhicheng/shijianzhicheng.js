import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {shijianzhichengActions} from '../../reducers/shijianzhicheng.js';
import _ from 'lodash';

class Shijianzhicheng extends Component {
  constructor(props) { 
    super(props);
    this.handleAddShijian = this.handleAddShijian.bind(this);
    this.handleChangeRenwu = this.handleChangeRenwu.bind(this);
    this.handleDeleteShijian = this.handleDeleteShijian.bind(this);
    this.handleChangeShijian = this.handleChangeShijian.bind(this);
    this.handleChangeShilishishi = this.handleChangeShilishishi.bind(this);
    this.handleChangeShili = this.handleChangeShili.bind(this);
    this.handleChangeShifouyizhi = this.handleChangeShifouyizhi.bind(this);
  }

  handleAddShijian() {
    this.props.addShijian();
  }

  handleChangeRenwu(e, k) {
    this.props.changeRenwu(e.target.value, k);
  }

  handleDeleteShijian(e, k) {
    this.props.deleteShijian(k);
  }

  handleChangeShijian(e, k) {
    this.props.changeShijian(e.target.value, k);
  }

  handleChangeShilishishi(e, k) {
    this.props.changeShilishishi(e.target.value, k);
  }

  handleChangeShili(e, k) {
    this.props.changeShili(e.target.value, k);
  }

  handleChangeShifouyizhi(e, k) {
    this.props.changeShifouyizhi(e.target.value, k);
  }

  parseShijianList() {
    const {shijianzhicheng} = this.props;
    const list = [];
    let i = 0;
    _.forOwn(shijianzhicheng, (v, k) => {
      i = list.length+1;
      list.push (
        <div key={k} className="shijianzhicheng-card">
          <h4>{`事件支撑 ${i}`}</h4>
          <button className="shijianzhicheng-delete-button" onClick={(e) => this.handleDeleteShijian(e, k)}>X</button>
          <div>
            <p>人物: </p>
            <input type="text" onChange={(e) => this.handleChangeRenwu(e, k)}/>  
          </div>
          <div>
            <p>事件: </p>
            <textarea 
              rows="4"
              placeholder="概括表述出事件的要素" onChange={(e) => this.handleChangeShijian(e, k)}
              value={v.shijian}
            />
          </div>
          <div>
            <p>能揭示出题意中的事理的事实: </p>
            <textarea 
              rows="4"
              placeholder="明确指出揭示题意的关键支撑内容" onChange={(e) => this.handleChangeShilishishi(e, k)}
              value={v.shilishishi}
            />
          </div>
          <div>
            <p>事件蕴含的事理是: (用概括的语言表述出来)</p>
            <textarea 
              rows="4"
              placeholder="基于习作的事实和语境指明其表达的上位事理" onChange={(e) => this.handleChangeShili(e, k)}
              value={v.shili}
            />
          </div>
          <p>事件蕴含的事理与题意包含的事理是否一致: </p>
          <div onChange={(e) => this.handleChangeShifouyizhi(e, k)}>
            <input type="radio" id={`yizhi9-${i}`} name={`q9-${i}`} checked={v.shifouyizhi==="yizhi"} value="yizhi" onChange={()=>{}}/>
            <label htmlFor={`yizhi9-${i}`}>一致</label>
            <input type="radio" id={`youdian9-${i}`} name={`q9-${i}`} checked={v.shifouyizhi==="youdianguanlian"} value="youdianguanlian" onChange={()=>{}}/>
            <label htmlFor={`youdian9-${i}`}>有点关联</label>
            <input type="radio" id={`meiyou9-${i}`} name={`q9-${i}`} checked={v.shifouyizhi==="meiyouguanxi"} value="meiyouguanxi" onChange={()=>{}}/>
            <label htmlFor={`meiyou9-${i}`}>没有关系</label>
          </div>
        </div>
      );
    });
    return list;
  }

  render() {
    const shijianList = this.parseShijianList();
    return (
      <div>
        <p>{`(一) 事件支撑`}</p>
        {shijianList}
        <button onClick={this.handleAddShijian}>添加事件支撑</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shijianzhicheng: state.shijianzhicheng
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShijian: bindActionCreators(shijianzhichengActions.addShijian, dispatch),
    deleteShijian: bindActionCreators(shijianzhichengActions.deleteShijian, dispatch),
    changeRenwu: bindActionCreators(shijianzhichengActions.changeRenwu, dispatch),
    changeShijian: bindActionCreators(shijianzhichengActions.changeShijian, dispatch),
    changeShilishishi: bindActionCreators(shijianzhichengActions.changeShilishishi, dispatch),
    changeShili: bindActionCreators(shijianzhichengActions.changeShili, dispatch),
    changeShifouyizhi: bindActionCreators(shijianzhichengActions.changeShifouyizhi, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shijianzhicheng);