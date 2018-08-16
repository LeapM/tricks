1. docker pull ethereum/client-go
2. docker container run -it -p 8545:8545 -p 30303:30303 ethereum/client-go --rpc --rpcaddr "0.0.0.0"

## support both ws, rpc from external ip, not safe, better use ssh tunnel
3. docker container run --name geth -it -p 30303:30303 -p 8545:8545 -p 8546:8546 -v /data/data0/.ethereum:/root/.ethereum ethereum/client-go --rpc --ws --rpcaddr "0.0.0.0" --wsaddr "0.0.0.0" --wsorigins "*"
