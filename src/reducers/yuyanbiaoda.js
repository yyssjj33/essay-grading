const initState = {
  jiegou: null,
  silu: null,
  yuyan: null,
  zonghe: null,
}

export const yuyanbiaoda = (state=initState, action) => {
  const {jiegou, silu, yuyan, zonghe} = action;
  switch (action.type) {
    case "CHANGE_JIEGOU":
      return {
        ...state,
        jiegou
      };
    
    case "CHANGE_SILU":
      return {
        ...state,
        silu
      }

    case "CHANGE_YUYAN":
      return {
        ...state,
        yuyan
      }
    case "CHANGE_ZONGHE":
      return {
        ...state,
        zonghe
      }
    default:
      return state;
  }
}

export const yuyanbiaodaActions = {
  changeJiegou(jiegou) {
    return {
      type: "CHANGE_JIEGOU",
      jiegou
    }
  },

  changeSilu(silu) {
    return {
      type: "CHANGE_SILU",
      silu
    }
  },

  changeYuyan(yuyan) {
    return {
      type: "CHANGE_YUYAN",
      yuyan
    }
  },

  changeZonghe(zonghe) {
    return {
      type: "CHANGE_ZONGHE",
      zonghe
    }
  }
}