const LinkedList = require('./linked')

let newList = new LinkedList();

newList.append('P')
newList.append('r')
newList.append('o')
newList.append('j')
newList.append('e')
newList.append('c')
newList.append('t')

newList.prepend('n')
newList.prepend('i')
newList.prepend('d')
newList.prepend('O') 

console.log(newList.size())
newList.pop()
console.log(newList.size())

newList.toString()


