import { createStore } from 'redux';
import rootReducer from '../reducers';
import _ from 'lodash';
let persistedState;
const ls = localStorage.getItem("state")
if (ls) {
  persistedState = JSON.parse(ls);
} else {
  persistedState = {
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


const store = createStore(rootReducer, persistedState);
window.store = store;
store.subscribe(_.debounce(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()))
}, 500))
export default store;