// store => wadah untuk menyimpan value/ Global state
// Reducer => Untuk melakukan update store
// Dispatching Action 
// Subscription

const redux = require('redux')

const createStore = redux.createStore;

const initialState = {
    name: "beemo",
    age : 16
}

const rootReducer = (state = initialState, action) => {
    // Reducer menerima dua buah parameter, state dan action
    if (action.type === "ADD_AGE") {
        return{
            ...state,
            age:state.age + 1
        }
    }
    if (action.type === "CHANGE_NAME") {
        return{
            ...state,
            name:action.newName
        }
    }
    return state
}
const store = createStore(rootReducer);

//Subscription
//this will be called everytime the store changed
store.subscribe(() => {
    console.log("STORE CHANGED",store.getState());
})

console.log(store.getState());

//Dispatching Action
store.dispatch(
    {
        type: "ADD_AGE"
    }
)

// Dispatching Action with Input
store.dispatch(
    {
        type: "CHANGE_NAME",
        newName : "fahmi"
    }
)

