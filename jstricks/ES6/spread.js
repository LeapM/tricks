//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
function myFunction(x, y, z) { }
var args = [0, 1, 2];

//use apply to pass elements of an array as arugments to a function 
myFunction.apply(null, args);
//spread and it can use multiple times myFunction(...[1],2,...[4,4])
myFunction(...args);

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = arr1.concat(arr2);
//better way to concat
arr1 = [...arr1, ...arr2];

var arr = [1, 2, 3];
//better way to copy
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 


//object spread
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
var mergedObj = { ...obj1, ...obj2 };


var newState={ ...state, ...{
  //ES6 computed property syntax
  [action.subreddit]: posts(state[action.subreddit], action)
}};