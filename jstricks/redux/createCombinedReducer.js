//please refer to https://redux.js.org/docs/basics/Reducers.html

function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
      //ES6 way
      return [...state,{text:action.text,completed:false}];
    case 'COMPLETE_TODO':
    return state.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: true
        });
        //ES6 way
        return {...todo, ...{completed:true}};
      }
      return todo
    })
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

//this is the very basic reducer combine function implementation
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

// good pattern
import { combineReducers } from 'redux'
import * as reducers from './reducers'
const todoApp = combineReducers(reducers)