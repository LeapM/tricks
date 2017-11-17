const Rx = require('rxjs');
const moment = require('moment');

const source = Rx.Observable.interval(1000).take(3);

//highOrder here is an observable of observables
const highOrder = source.map(val => {
  console.log('example', moment().format('LTS'));
  return Rx.Observable.interval(val * 1000 + 1000).take(2)
});

//combineAll waits the end of observable of observables flow.
//combineAll combine a observable of observables into first-order observable by combining their value.
highOrder.combineAll().subscribe((val) => {
  console.log('sub',moment().format('LTS'));
  console.log(val)
});