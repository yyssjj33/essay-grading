import { v4 } from 'uuid';
import _ from 'lodash';
export const shijianzhicheng = (state = {}, action) => {
  const {renwu, shijian, shilishishi, shili, shifouyizhi, id} = action;
  switch (action.type) {
    case "ADD_SHIJIAN":
      return {
        ...state,
        [v4()]:{}
      }
    case "DELETE_SHIJIAN":
      return _.omit(state, id);
    case "CHANGE_RENWU_SHIJIANZHICHENG":
      return {
        ...state,
        [id]: {
          ...state[id],
          renwu
        }
      }
    case "CHANGE_SHIJIAN_SHIJIANZHICHENG":
      return {
        ...state,
        [id]: {
          ...state[id],
          shijian
        }
      }
    case "CHANGE_SHILISHISHI_SHIJIANZHICHENG":
      return {
        ...state,
        [id]: {
          ...state[id],
          shilishishi
        }
      }
    case "CHANGE_SHILI_SHIJIANZHICHENG":
      return {
        ...state,
        [id]: {
          ...state[id],
          shili
        }
      }
    case "CHANGE_SHIFOUYIZHI_SHIJIANZHICHENG":
      return {
        ...state,
        [id]: {
          ...state[id],
          shifouyizhi
        }
      }     
    default:
      return state;
  }
}

export const shijianzhichengActions = {
  addShijian() {
    return {
      type: "ADD_SHIJIAN"
    }
  },

  deleteShijian(id) {
    return {
      type: "DELETE_SHIJIAN",
      id
    }
  },

  changeRenwu(renwu, id) {
    return {
      type: "CHANGE_RENWU_SHIJIANZHICHENG",
      renwu,
      id
    }
  },

  changeShijian(shijian, id) {
    return {
      type: "CHANGE_SHIJIAN_SHIJIANZHICHENG",
      shijian,
      id
    }
  },

  changeShilishishi(shilishishi, id) {
    return {
      type: "CHANGE_SHILISHISHI_SHIJIANZHICHENG",
      shilishishi,
      id
    }
  },

  changeShili(shili, id) {
    return {
      type: "CHANGE_SHILI_SHIJIANZHICHENG",
      shili,
      id
    }
  },

  changeShifouyizhi(shifouyizhi, id) {
    return {
      type: "CHANGE_SHIFOUYIZHI_SHIJIANZHICHENG",
      shifouyizhi,
      id
    }
  }
}

