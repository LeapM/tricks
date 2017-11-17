'use strict';

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const wait2Sec = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 2000);
});

//await is not supported by node 7.8 yet. need babel to transform
function f1() {
  var data;
  return _regeneratorRuntime2.default.async(function f1$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        console.log('start await');
        _context.next = 3;
        return _regeneratorRuntime2.default.awrap(wait2Sec);

      case 3:
        data = _context.sent;

        console.log(`result: ${data}`);

      case 5:
      case 'end':
        return _context.stop();
    }
  }, null, this);
}

f1();
