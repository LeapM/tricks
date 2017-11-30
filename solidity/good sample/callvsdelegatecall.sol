contract D {
  uint public n;
  address public sender;
  event Log(address,uint);
  function callSetN(address _e, uint _n) {
    _e.call(bytes4(sha3("setN(uint256)")), _n); // E's storage is set, D is not modified 
    Log(msg.sender, _n);
  }

  function callcodeSetN(address _e, uint _n) {
    _e.callcode(bytes4(sha3("setN(uint256)")), _n); // D's storage is set, E is not modified 
    Log(msg.sender, _n);
  }

  function delegatecallSetN(address _e, uint _n) {
    _e.delegatecall(bytes4(sha3("setN(uint256)")), _n); // D's storage is set, E is not modified 
    Log(msg.sender, _n);
  }
}

contract E {
  uint public n;
  address public sender;
  event Log(address,uint);
  function setN(uint _n) {
    n = _n;
    sender = msg.sender;
    Log(msg.sender,n);
    // msg.sender is D if invoked by D's callcodeSetN. None of E's storage is updated
    // msg.sender is C if invoked by C.foo(). None of E's storage is updated

    // the value of "this" is D, when invoked by either D's callcodeSetN or C.foo()
  }
}

contract C {
    D _d = new D();
    E _e = new E();
    function testStaticCall() {
       _d.delegatecallSetN(_e, 3);
    } 
    function testCallDelegate() {
       _d.call(bytes4(sha3("delegatecallSetN(address,uint256)")),_e,2);
    } 
    
}
