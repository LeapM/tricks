## solidity
address.call.gas(uint).value(unit)();
address.send(uint);
address.transfer(unit);


## javascript
```javascript
let from = 0x1111;
let to =  0x2222;
let value = w3b3.toWei(1,'eth');
let gas = 2100;
let gasPrice = web3.toWei(5,'gwei');
web3.eth.sendTransaction({from,to,value,gas,gasPrice});
```