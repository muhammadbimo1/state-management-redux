import ActionType from "./GlobalActionType"

const globalState = { 
    menus : [],
    tables : [],
    customers : [],
    isLoggedIn: true,
    formOpen:false,
    currentScreen:"home"
  }
  
  const rootReducer = (state = globalState, action) => {
    //MENU
    if(action.type === ActionType.ADD_MENU){
      return {
        ...state,
        menus: [...state.menus,action.payload],
        formOpen:false
      }
    }
    if(action.type === ActionType.DELETE_MENU){
      let menus2 = state.menus;

      menus2.splice(action.index, 1);
      return {
        ...state,
        menus: [...menus2]
      }
    }

    //TODO TABLE
    if(action.type === ActionType.ADD_TABLE){
      return {
        ...state,
        tables: [...state.tables,action.payload],
        formOpen:false
      }
    }
    if(action.type === ActionType.DELETE_TABLE){
      let tables2 = state.tables;

      tables2.splice(action.index, 1);
      return {
        ...state,
        tables: [...tables2]
      }
    }

    //CUSTOMERS
    if(action.type === ActionType.ADD_CUSTOMER){
      return {
        ...state,
        customers: [...state.customers,action.payload],
        formOpen:false
      }
    }
    if(action.type === ActionType.DELETE_CUSTOMER){
      let customers2 = state.customers;

      customers2.splice(action.index, 1);
      return {
        ...state,
        customers: [...customers2]
      }
    }

    //NAVBAR MOVEMENT
    if(action.type === ActionType.MOVE_HOME){
      return {
        ...state,
        currentScreen: "home",
        formOpen:false
      }
    }
    if(action.type === ActionType.MOVE_MENU){
      return {
        ...state,
        currentScreen: "menu",
        formOpen:false
      }
    }
    if(action.type === ActionType.MOVE_TABLE){
      return {
        ...state,
        currentScreen: "table",
        formOpen:false
      }
    }
    if(action.type === ActionType.MOVE_CUSTOMER){
      return {
        ...state,
        currentScreen: "customer",
        formOpen:false
      }
    }
    //Open and close Form
    if(action.type === ActionType.OPEN_FORM){
      return {
        ...state,
        formOpen: true
      }
    }
    if(action.type === ActionType.CLOSE_FORM){
      return {
        ...state,
        formOpen: false
      }
    }
    //LOGIN,LOGOUT
    if(action.type === ActionType.LOGIN){
      return {
        ...state,
        isLoggedIn: true
      }
    }
    if(action.type === ActionType.LOGOUT){
      return {
        ...state,
        isLoggedIn: false
      }
    }
    return state
  }
  
  export default rootReducer;