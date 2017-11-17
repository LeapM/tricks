## splice vs slice

splice modify the original array and return an array with removed value
splice takes n arguments:
1. index minus value is from backend, -1 is the last entry
2. number of entries to be removed. optional. if not specified, all value from the index will be removed 
3. ... the new values to be inserted

slice doesn't modify the orignal array, return an array with selected value
1. the index, same as splice
2. number of entries. same as splice

[link of explaination](http://www.tothenew.com/blog/javascript-splice-vs-slice/)