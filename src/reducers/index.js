import { combineReducers } from 'redux'
import {tiyibiaoda} from './tiyibiaoda.js'
import {shijianzhicheng} from './shijianzhicheng.js';
import {daolizhicheng} from './daolizhicheng.js';
import {quanwentiyizhicheng} from './quanwentiyizhicheng.js';
import {yuyanbiaoda} from './yuyanbiaoda.js';
export default combineReducers({
  tiyibiaoda,
  shijianzhicheng,
  daolizhicheng,
  quanwentiyizhicheng,
  yuyanbiaoda
});