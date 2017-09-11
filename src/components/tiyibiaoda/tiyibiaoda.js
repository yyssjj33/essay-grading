import React, { Component } from 'react';

class Tiyibiaoda extends Component {

    constructor(props) { 
      super(props);
      this.state = {
        zhibaiOrHanxu: null,
        zhengqueOrCuowu: null,
        tiyifangshi: null,
        tiyifangshiQita: '',
        zhibaiTiyijuzi: '',
        hanxuTiyijuzi: '',
        duanshu: 0,
        hangshu: 0
      }

      this.handleZhibaiOrHanxu = this.handleZhibaiOrHanxu.bind(this);
      this.handleZhengqueOrCuowu = this.handleZhengqueOrCuowu.bind(this);
      this.handleHanxuTiyijuzi = this.handleHanxuTiyijuzi.bind(this);
      this.handleZhibaiTiyijuzi = this.handleZhibaiTiyijuzi.bind(this);
      this.handleDuanshu = this.handleDuanshu.bind(this);
      this.handleHangshu = this.handleHangshu.bind(this);
      this.handleHanxubiaodafangshi = this.handleHanxubiaodafangshi.bind(this);
      this.handleQita = this.handleQita.bind(this);
    }

    handleZhibaiOrHanxu(e) {
      const zhibaiOrHanxu = e.target.value;
      this.setState({zhibaiOrHanxu});
    }

    handleZhengqueOrCuowu(e) {
      this.setState({zhengqueOrCuowu: e.target.value});
    }

    handleZhibaiTiyijuzi(e) {
      this.setState({zhibaiTiyijuzi: e.target.value});
    }

    handleHanxuTiyijuzi(e) {
      this.setState({hanxuTiyijuzi: e.target.value});
    }

    handleHanxubiaodafangshi(e) {
      this.setState({tiyifangshi: e.target.value});
    }

    handleQita(e) {
      this.setState({tiyifangshiQita: e.target.value});
    }

    handleDuanshu(e) {
      this.setState({duanshu: e.target.value});
    }

    handleHangshu(e) {
      this.setState({hangshu: e.target.value});
    }

    parseQ23(zhibaiOrHanxu) {
      const {tiyifangshi, hanxuTiyijuzi, zhibaiTiyijuzi} = this.state;
      if (zhibaiOrHanxu === 'zhibai') {
        return (
          <div>
            <div>
              <p>2.本文直白表达题意的语句是：</p>
              <textarea rows="4" cols="50" ref={(ta)=>{this.zbjz=ta}} 
                placeholder="输入表达题意的原文" onChange={this.handleZhibaiTiyijuzi}
                value={zhibaiTiyijuzi}
              />
            </div>
            <div>
              <p>3.本文直白表达题意的语句的位置：</p>
              <input type="number" min="0" value={this.state.duanshu} onChange={this.handleDuanshu}/> {'段'} 
              <input type="number" min="0" value={this.state.hangshu} onChange={this.handleHangshu}/> {'行'}
            </div>
          </div>
        );
      }
      if (zhibaiOrHanxu === 'hanxu') {
        return (
          <div>
            <div>
              <p>2.本文以含蓄的方式表达的题意是：（概括表述）</p>
              <textarea rows="4" cols="50"  ref={(ta)=>{this.hxjz=ta}}
                placeholder="阅卷者用自己的话概括表述" onChange={this.handleHanxuTiyijuzi}
                value={hanxuTiyijuzi}
              />
            </div>
            <div>
              <p>3.本文含蓄表达题意的方式是：</p>
              <div onChange={this.handleHanxubiaodafangshi} style={{display:"inline"}}>
                <input type="radio" id="xiuci" name="q3" checked={tiyifangshi==="xiuci"} value="xiuci" onChange={()=>{}}/>
                <label htmlFor="xiuci">借助修辞</label>
                <input type="radio" id="yanzhi" name="q3" checked={tiyifangshi==="yanzhi"} value="yanzhi" onChange={()=>{}}/>
                <label htmlFor="yanzhi">托物言志</label>
                <input type="radio" id="yuli" name="q3" checked={tiyifangshi==="yuli"} value="yuli" onChange={()=>{}}/>
                <label htmlFor="yuli">以事寓理</label>
              </div>
              <label htmlFor="qita">{'   '} 其他</label>
              <input type="text" id="qita" placeholder="补出其他方式" value={this.state.tiyifangshiQita} onChange={this.handleQita}/>
            </div>
          </div>
        );
      }
    }

    render() {
      const {zhibaiOrHanxu, zhengqueOrCuowu} = this.state;
      return (
        <div>
          <h2>题意表达</h2>
          <div>
            <p>1.本文题意的表达是直白的还是含蓄的？</p>
            <div onChange={this.handleZhibaiOrHanxu}>
              <input type="radio" id="zhibai" name="q2" value="zhibai" checked={zhibaiOrHanxu==="zhibai"} onChange={()=>{}}/>
              <label htmlFor="zhibai">直白</label>
              <input type="radio" id="hanxu" name="q2" value="hanxu" checked={zhibaiOrHanxu==="hanxu"} onChange={()=>{}}/>
              <label htmlFor="hanxu">含蓄</label>
            </div>
          </div>
          <div>
            {
              zhibaiOrHanxu === null ? null:
              this.parseQ23(zhibaiOrHanxu)
            } 
          </div>
          <div>
            <p>4.基于全文判断，本文表达的题意是否正确？</p>
            <div onChange={this.handleZhengqueOrCuowu}>
              <input type="radio" id="zhengque" name="q4" value="zhengque" checked={zhengqueOrCuowu==="zhengque"} onChange={()=>{}}/>
              <label htmlFor="zhengque">正确</label>
              <input type="radio" id="cuowo" name="q4" value="cuowu" checked={zhengqueOrCuowu==="cuowu"} onChange={()=>{}}/>
              <label htmlFor="cuowu">错误</label>
            </div>
          </div>
        </div>
      );
    }

}

export default Tiyibiaoda;