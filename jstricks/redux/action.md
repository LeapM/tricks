## what is action
Actions are payloads of information that send information from your application to store. they are sent by ```store.dispatch(action)```
## how to create action
1. nothing wrong to create acton by mnaully create plain object
2. for a large project, better to use actionCreator function to create action to avoid bug and support easily testing

once the application is big enough move actiontype to seperate module
``` javascript
import {ADD_TODO,REMOVE_TODO} from '../actionTypes';
```