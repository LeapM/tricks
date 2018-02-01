## what is action
Actions are payloads of information that send information from your application to store. they are sent by ```store.dispatch(action)```
## how to create action
1. nothing wrong to create acton by mnaully create plain object
2. for a large project, better to use actionCreator function to create action to avoid bug and support easily testing

once the application is big enough move actiontype to seperate module
``` javascript
import {ADD_TODO,REMOVE_TODO} from '../actionTypes';
```
## avoid action creation boilerplate code 
``` javascript
function makeActionCreator(type, ...argNames) {
  return function (...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = makeActionCreator(ADD_TODO, 'text')
export const editTodo = makeActionCreator(EDIT_TODO, 'id', 'text')
export const removeTodo = makeActionCreator(REMOVE_TODO, 'id')

```
