## Solidity import

1. #### import "filename"
this statement imports all global symbaols from 'filename'. **Different than in ES6** but backward-compatible for solidity
In javascript, this syntax **Import a module for its side effects only**

2. #### import "filename" as symbolName
this is **not part of ES6**, which is equivant to `import * as symbolName from 'filename'`