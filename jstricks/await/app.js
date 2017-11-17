/*
** babel convert await to regenerator, which is not availabe by default. regenerator-runtime add this support
** babel-plugin-transform-es2015-modules-commonjs is required to use ES2015 import export syntax
*/
import regeneratorRuntime from "regenerator-runtime";

const wait2Sec = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 2000);
});

/*
** async await is not supported in node 7.8 yet. 2 plugin is required
** babel-plugin-syntax-async-functions
** babel-plugin-transform-regenerator
** either npm regenerator-runtime or babel polyfill 
*/
async function f1() {
  console.log('start await');
  //await can only be used inside async function
  const data = await wait2Sec;
  console.log(`result: ${data}`);
  
}

f1();