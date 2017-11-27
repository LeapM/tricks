## how to call external contract method from another contract

### know the ABI without the implementation
1. `contract_address.call(bytes4(sha3("function_name(types)")),parameters_values)`

### know the implementation
1. 

```javascript
contract A {
  function dummy(){

  }
}



contract B{
  function callA(){
    A a = A(a_address);
    a.dummy();
  }
}

```

### call from Web3
```javascript
var myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    from: '0x1234567890123456789012345678901234567891', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
```