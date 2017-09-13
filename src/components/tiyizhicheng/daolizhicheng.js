import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {daolizhichengActions} from '../../reducers/daolizhicheng.js';
import _ from 'lodash';

class Daolizhicheng extends Component {
  constructor(props) { 
    super(props);
    this.handleAddDaoli = this.handleAddDaoli.bind(this);
    this.handleChangeRenwu = this.handleChangeRenwu.bind(this);
    this.handleDeleteDaoli = this.handleDeleteDaoli.bind(this);
    this.handleChangeShili = this.handleChangeShili.bind(this);
    this.handleChangeShifouyizhi = this.handleChangeShifouyizhi.bind(this);
  }

  handleAddDaoli() {
    this.props.addDaoli();
  }

  handleChangeRenwu(e, k) {
    this.props.changeRenwu(e.target.value, k);
  }

  handleDeleteDaoli(e, k) {
    this.props.deleteDaoli(k);
  }

  handleChangeShili(e, k) {
    this.props.changeShili(e.target.value, k);
  }

  handleChangeShifouyizhi(e, k) {
    this.props.changeShifouyizhi(e.target.value, k);
  }

  parseDaoliList() {
    const {daolizhicheng} = this.props;
    const list = [];
    let i = 0;
    _.forOwn(daolizhicheng, (v, k) => {
      console.log(v.shifouyizhi);
      i = list.length+1;
      list.push (
        <div key={k} className="daolizhicheng-card">
          <h4>{`道理支撑 ${i}`}</h4>
          <button className="daolizhicheng-delete-button" onClick={(e) => this.handleDeleteDaoli(e, k)}>X</button>
          <div>
            <p>人物: </p>
            <input type="text" onChange={(e) => this.handleChangeRenwu(e, k)}/>  
          </div>
          <div>
            <p>人物的言论包含的事理: </p>
            <textarea 
              rows="4"
              onChange={(e) => this.handleChangeShili(e, k)}
              value={v.shili}
            />
          </div>
          <p>人物言论包含的事理与题意包含的事理是否一致: </p>
          <div onChange={(e) => this.handleChangeShifouyizhi(e, k)}>
            <input type="radio" id={`yizhi12-${i}`} name={`q12-${i}`} checked={v.shifouyizhi==="yizhi"} value="yizhi" onChange={()=>{}}/>
            <label htmlFor={`yizhi12-${i}`}>一致</label>
            <input type="radio" id={`youdian12-${i}`} name={`q12-${i}`} checked={v.shifouyizhi==="youdianguanlian"} value="youdianguanlian" onChange={()=>{}}/>
            <label htmlFor={`youdian12-${i}`}>有点关联</label>
            <input type="radio" id={`meiyou12-${i}`} name={`q12-${i}`} checked={v.shifouyizhi==="meiyouguanxi"} value="meiyouguanxi" onChange={()=>{}}/>
            <label htmlFor={`meiyou12-${i}`}>没有关系</label>
          </div>
        </div>
      );
    });
    return list;
  }

  render() {
    const daoliList = this.parseDaoliList();
    return (
      <div>
        <p>{`(二) 道理支撑`}</p>
        {daoliList}
        <button onClick={this.handleAddDaoli}>添加道理支撑</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    daolizhicheng: state.daolizhicheng
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDaoli: bindActionCreators(daolizhichengActions.addDaoli, dispatch),
    deleteDaoli: bindActionCreators(daolizhichengActions.deleteDaoli, dispatch),
    changeRenwu: bindActionCreators(daolizhichengActions.changeRenwu, dispatch),
    changeShili: bindActionCreators(daolizhichengActions.changeShili, dispatch),
    changeShifouyizhi: bindActionCreators(daolizhichengActions.changeShifouyizhi, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Daolizhicheng);