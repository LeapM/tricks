/*===========core demo======================================*/
let {
  createStore, combineReducers
} = require('redux');

//reducer 
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}
//reducer
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map(
        (todo, index) =>
          action.index === index
            ? { text: todo.text, completed: !todo.completed }
            : todo
      )
    default:
      return state
  }
}
//root reducer by writing a basic combineReducer function
//or todoApp = combineReducers({todos,visibilityFilter});
function todoApp(state={},action){
  return{
    todos:todos(state.todos,action),
    visibilityFilter:visibilityFilter(state.visibilityFilter,action)
  }
}
//

//create store by passing reducer, optional initial state and optional enhancer
let store = createStore(todoApp);

//subscribe to store state mutation
store.subscribe(() => {
  console.log(store.getState());
})

//dipatch action
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter:"SHOW_ALL"

});
store.dispatch({
  type: "ADD_TODO",
  text:"buy food"
});
store.dispatch({
  type: "ADD_TODO",
  text:"buy drink"
});

/**
 * store has the app state. create by redux.createStore(reducer,)
 * 
 * 
 * 
 */