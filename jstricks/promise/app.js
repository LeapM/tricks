
var promiseRandom = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.floor(Math.random() * 2) == 0) {
      resolve("success");
    } else {
      reject("failed");
    }
  }, 200);
});

function log(result) {
  console.log(result)
  return "log";
};

/*
**every promise has then method which accepts two functio nas arguments:resolve and reject
*/
promiseRandom.then(log,log);
/*
**Promise also expose a catch function. It is syntax sugar of the raw syntax then(resolve,reject)
**it is crucial to know that then and catch always return a Promise object, so several then calls can be chained
**The syntax below is possible because then always return Promise
**the belows two calls are same
*/
promiseRandom.then(log).catch(log);
promiseRandom.then(log).catch(undefined,log);
/*
**this will log "success" "log" "log" when promiseRandom resolved 
*/
promiseRandom.then(log, log).then(log).then(log);

/*
**Promise static method
**Promise.all Promise.race Promise.resovlve Promise.reject
*/
Promise.reject("failed simple").catch(log);
Promise.resolve("succes simple").then(log);