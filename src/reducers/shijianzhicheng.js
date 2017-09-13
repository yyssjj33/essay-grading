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
    case "CHANGE_RENWU":
      return {
        ...state,
        [id]: {
          ...state[id],
          renwu
        }
      }
    case "CHANGE_SHIJIAN":
      return {
        ...state,
        [id]: {
          ...state[id],
          shijian
        }
      }
    case "CHANGE_SHILISHISHI":
      return {
        ...state,
        [id]: {
          ...state[id],
          shilishishi
        }
      }
    case "CHANGE_SHILI":
      return {
        ...state,
        [id]: {
          ...state[id],
          shili
        }
      }
    case "CHANGE_SHIFOUYIZHI":
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
      type: "CHANGE_RENWU",
      renwu,
      id
    }
  },

  changeShijian(shijian, id) {
    return {
      type: "CHANGE_SHIJIAN",
      shijian,
      id
    }
  },

  changeShilishishi(shilishishi, id) {
    return {
      type: "CHANGE_SHILISHISHI",
      shilishishi,
      id
    }
  },

  changeShili(shili, id) {
    return {
      type: "CHANGE_SHILI",
      shili,
      id
    }
  },

  changeShifouyizhi(shifouyizhi, id) {
    return {
      type: "CHANGE_SHIFOUYIZHI",
      shifouyizhi,
      id
    }
  }
}

