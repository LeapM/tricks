## ABI is the format for abouth contract to contract/ouside the blockchain interaction. 

The encoding is not self describing and thus requires a schema in order to decode

## function selector


## the rest(same format for return value/log format)

### element type
1. unit<m>
2. int<m>
3. address -> uint160
4. bool -> uint8
5. fixed<m>x<n>
6. unfixe<m>x<n>
7. fixed/ufixed => fixed128 X 18 , ufixe 128 X 18
8. bytesm<m>
9. function an address 20bytes followed by 4 bytes function selector ==> byte24

### fixed size array

type<M>

### variable type

bytes
string
<type>[]

### tuple as type combination

It is possible to form tuples of tuples, arrays of tuples and so on.

### design principle
1. number of read to reach a value is at most the depth of the value inside the argument array structure
2. the data of a variable or array element is not interleave with other data. It only use relative address

### dynamic type
bytes, string, T[] for any type, T[k] for any dynamic T, (T1,....,Tk) if Ti is dynamic for from

dynamic types are encoded at a **seperately allocated location after the current block**

### len(a) is the number of bytes i a binray string

### formular
#### general formular
(T1,.......Tk) for K>=0 and any types T1,.......,Tk
```enc(x)= head(x(1))... head(x(k)) tail(x(1))...tail(x(k))```
#### static type
for static type
```head(x(i)) = enc(x(i)) and tail(X(i)) = ""```
#### for dynamic type
Its value is the offset of the beginning of tail(X(i)) relative to th start of enc(X)
```head(X(i)) = enc(len(head(X(1)) ... head(X(k)) tail(X(1)) ... tail(X(i-1)) ))```
```tail = enc(X(i)```
#### enc in detail
##### T[k] for any T and k
enc(x) = enc((X[0],...X[k-1])
##### T[] where X has k elemetns
enc(x)=enc(k) enc(X[0],...[X[k-1]])
##### bytes
enc(x) = enc(k)pad_right(x)
##### string enc(X) = enc(enc_utf(X))
##### uint<M>: big endian ecnoding(x)
#####  address = unint160
##### int<M> padding 0Xff for negative x 0X00 for positive
##### bool == uint8
##### fixed<M>x<N> enc(x * 10 ** N)
##### ufixed<M>x<N> same as fixe but interpreted as a int126





