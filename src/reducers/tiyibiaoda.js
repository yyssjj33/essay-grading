const initState = {
  zhibaiOrHanxu: null,
  zhengqueOrCuowu: null,
  tiyifangshi: null,
  tiyifangshiQita: '',
  zhibaiTiyijuzi: '',
  hanxuTiyijuzi: '',
  duanshu: 0,
  hangshu: 0
};

export const tiyibiaoda = (state = initState, action) => {
  const {
    zhibaiOrHanxu, 
    zhengqueOrCuowu, 
    tiyifangshi, 
    tiyifangshiQita,
    zhibaiTiyijuzi,
    hanxuTiyijuzi,
    duanshu,
    hangshu
  } = action;
  switch (action.type) {
    case "CHANGE_ZHIBAIORHANXU":
      return {
        ...state,
        zhibaiOrHanxu
      };
    case "CHANGE_ZHENGQUEORCUOWU":
      return {
        ...state,
        zhengqueOrCuowu
      };
    case "CHANGE_TIYIFANGSHI":
      return {
        ...state,
        tiyifangshi
      }
    case "CHANGE_TIYIFANGSHIQITA":
      return {
        ...state,
        tiyifangshiQita
      }
    case "CHANGE_ZHIBAITIYIJUZI":
      return {
        ...state,
        zhibaiTiyijuzi
      }
    case "CHANGE_HANXUTIYIJUZI":
      return {
        ...state,
        hanxuTiyijuzi
      }
    case "CHANGE_HANGSHU":
      return {
        ...state,
        hangshu
      }
    case "CHANGE_DUANSHU":
      return {
        ...state,
        duanshu
      }
    default:
      return state;
  }
}

export const tiyibiaodaActions = {
  changeZhibaiOrHanxu(zhibaiOrHanxu) {
    return {
      type: "CHANGE_ZHIBAIORHANXU",
      zhibaiOrHanxu
    }
  },

  changeZhengqueOrCuowu(zhengqueOrCuowu) {
    return {
      type: "CHANGE_ZHENGQUEORCUOWU",
      zhengqueOrCuowu
    }
  },

  changeTiyifangshi(tiyifangshi) {
    return {
      type: "CHANGE_TIYIFANGSHI",
      tiyifangshi
    }
  },

  changeTiyifangshiQita(tiyifangshiQita) {
    return {
      type: "CHANGE_TIYIFANGSHIQITA",
      tiyifangshiQita
    }
  },

  changeZhibaiTiyijuzi(zhibaiTiyijuzi) {
    return {
      type: "CHANGE_ZHIBAITIYIJUZI",
      zhibaiTiyijuzi
    }
  },
  
  changeHanxuTiyijuzi(hanxuTiyijuzi) {
    return {
      type: "CHANGE_HANXUTIYIJUZI",
      hanxuTiyijuzi
    }
  },

  changeHangshu(hangshu) {
    return {
      type: "CHANGE_HANGSHU",
      hangshu
    }
  },

  changeDuanshu(duanshu) {
    return {
      type: "CHANGE_DUANSHU",
      duanshu
    }
  }
}
