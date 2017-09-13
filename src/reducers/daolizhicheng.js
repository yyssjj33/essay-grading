import { v4 } from 'uuid';
import _ from 'lodash';

export const daolizhicheng = (state = {}, action) => {
  const {renwu, shili, shifouyizhi, id} = action;
  switch (action.type) {
    case "ADD_DAOLI":
      return {
        ...state,
        [v4()]: {}
      }
    case "DELETE_DAOLI":
      return _.omit(state, id);
    case "CHANGE_RENWU_DAOLIZHICHENG":
      return {
        ...state,
        [id]: {
          ...state[id],
          renwu
        }
      }
    case "CHANGE_SHILI_DAOLIZHICHENG":
      return {
        ...state,
        [id]: {
          ...state[id],
          shili
        }
      }
    case "CHANGE_SHIFOUYIZHI_DAOLIZHICHENG":
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

export const daolizhichengActions = {
  addDaoli() {
    return {
      type: "ADD_DAOLI"
    }
  },

  deleteDaoli(id) {
    return {
      type: "DELETE_DAOLI",
      id
    }
  },

  changeRenwu(renwu, id) {
    return {
      type: "CHANGE_RENWU_DAOLIZHICHENG",
      renwu,
      id
    }
  },

  changeShili(shili, id) {
    return {
      type: "CHANGE_SHILI_DAOLIZHICHENG",
      shili,
      id
    }
  },

  changeShifouyizhi(shifouyizhi, id) {
    return {
      type: "CHANGE_SHIFOUYIZHI_DAOLIZHICHENG",
      shifouyizhi,
      id
    }
  }
}