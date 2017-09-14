import { combineReducers } from 'redux'
import {tiyibiaoda} from './tiyibiaoda.js'
import {shijianzhicheng} from './shijianzhicheng.js';
import {daolizhicheng} from './daolizhicheng.js';
import {quanwentiyizhicheng} from './quanwentiyizhicheng.js';
import {yuyanbiaoda} from './yuyanbiaoda.js';


const appReducer = combineReducers({
  tiyibiaoda,
  shijianzhicheng,
  daolizhicheng,
  quanwentiyizhicheng,
  yuyanbiaoda
});

export default (state, action) => {
  if (action.type === 'RESET') {
    state = {
    "tiyibiaoda": {
      "zhibaiOrHanxu": null,
      "zhengqueOrCuowu": null,
      "tiyifangshi": null,
      "tiyifangshiQita": "",
      "zhibaiTiyijuzi": "",
      "hanxuTiyijuzi": "",
      "duanshu": 0,
      "hangshu": 0
    },
    "shijianzhicheng": {},
    "daolizhicheng": {},
    "quanwentiyizhicheng": null,
    "yuyanbiaoda": {
      "jiegou": null,
      "silu": null,
      "yuyan": null,
      "zonghe": null
    }
  }
  }
  return appReducer(state, action)
}