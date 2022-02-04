import ActionType from "./GlobalActionType"

const globalState = { 
    globalNumber : 0
  }
  
  const rootReducer = (state = globalState, action) => {
    if(action.type === ActionType.PLUS){
      return {
        ...state,
        globalNumber: state.globalNumber + 1
      }
    }
    if(action.type === ActionType.MINUS){
      return {
        ...state,
        globalNumber: state.globalNumber - 1
      }
    }
  
    return state
  }
  
  export default rootReducer;