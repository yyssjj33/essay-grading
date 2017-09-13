export const quanwentiyizhicheng = (state = null, action) => {
  const {quanwentiyizhicheng} = action;
  switch (action.type) {
    case "CHANGE_QUANWENTIYIZHICHENG":
      return  quanwentiyizhicheng;
      
    default:
      return state;
  }
}

export const quanwentiyizhichengActions = {
  changeQuanwentiyizhicheng(quanwentiyizhicheng) {
    return {
      type: "CHANGE_QUANWENTIYIZHICHENG",
      quanwentiyizhicheng
    }
  }
}