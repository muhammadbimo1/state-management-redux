import ActionType from "./GlobalActionType"

const globalState = { 
    globalNumber : []
  }
  
  const rootReducer = (state = globalState, action) => {
    console.log("PAYLOAD",action);
    if(action.type === ActionType.PLUS){
      return {
        ...state,
        globalNumber: [...state.globalNumber,action.payload]
      }
    }
    if(action.type === ActionType.MINUS){
      let globalNumber2 = state.globalNumber;

      globalNumber2.splice(action.index, 1);
      console.log("updated",globalNumber2);
      return {
        ...state,
        globalNumber: [...globalNumber2]
      }
    }
    return state
  }
  
  export default rootReducer;