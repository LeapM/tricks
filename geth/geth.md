1. start without sync
   `geth --maxpeers 0 console`

2. open rpc [how to connect to remote node ](https://ethereum.stackexchange.com/questions/12436/how-to-communicate-with-a-remote-node)
   `geth --rpc --rpcport "8545" --rpcaddr "0.0.0.0" --rpccorsdomain "*"`

3. creat virtual channle

`ssh -fN -L 8545:localhost:8545 leapm@192.168.0.51`

4. add account
5. geth port

- 30303 node discovery
- 8545 rpc-json https
- 8546 rpc-json ws
