var i = "Hey I'm Global 'i'";
var funcsTwoLevels = [];
var funcsOneLevel = [];

(function augmented() {
  for (var i = 0; i < 4; i++) {
    funcsTwoLevels.push((function actual(actual) {
      return function logger() {
        console.log(actual, i);
      };
    })(i));
  }
})();


(function augmented() {
  for (var i = 0; i < 4; i++) {
    funcsOneLevel.push(
      function logger() {
        console.log(i);
      })
  }
})();

funcsOneLevel.forEach(function caller(f) {
  f();
});


funcsTwoLevels.forEach(function caller(f) {
  f();
});