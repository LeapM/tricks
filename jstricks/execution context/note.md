#execution context & lexical context & scope

## execution context
1. global execution context is created by js enginee
2. new execution context is created whenever function is executed
3. function execution context has a reference to outer execution context which is decided by its lexical environment
4. The contexts can be treated like stack frame in java; but yet, their lifespan is not dictated by the call stack.
5. context only gets destories if the creating function exist **AND the functions created inside it are no more reachable(lexical context)**
6. scope is interchangable to execution context.
[best explain](http://writing.brianruslim.com/2014/06/30/the-execution-context/)

## lexical environment 
Lexical Environment is the environment of the function where it is written. That is, the static order/place where it is situated, regardless from where it is called from

**The lexical context decides the out execution context for a function.**