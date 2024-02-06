const Node = require('./node')

module.exports = class LinkedList {
    constructor(){
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    get (){
        return this._head;
    }

    get (){ 
        return this._tail;
    }

    // Adds value to end of linked list
    append(value){ 
        const newNode = new Node(value)
        if(this._head === null && this._tail === null){
            this._head = newNode;
            this._tail = newNode;

        }else if(this._head === this._tail){
            this._tail = newNode;
            this._head.insertNext(this._tail)

        }else{
            const tail = this._tail;
            tail.insertNext(newNode)
            this._tail = newNode;
        }
        this._size += 1;
    }

    // Returns size of linked list
    size () {
        return this._size;
    }

    // Adds value to start of linked list
    prepend(value){ 
        const newNode = new Node(value)
        if(this._head == null && this._tail == null){
            this._head = newNode;
            this._tail = newNode;

        }else{
            const first = this._head;
            newNode.insertNext(first)
            this._head = newNode;
        }
        this._size += 1;
    }

    // Returns value of asked index in the list
    at(index){ // Toimii
        if (this._head == null){
            console.log('List is empty')
            return 
        } else {
            let currentIndex = 0;
            let current = this._head;
            
            if(currentIndex === index){
                return current;
            }
            
            while(current != null){

                currentIndex += 1;
                current = current.next

                if(currentIndex === index){
                    return current;
                }
            }
        }
        console.log('No node at that index')
        return 
    }

    // Removes last node on the list
    pop (){ 
        if (this._head == null){
            console.log('Cannot remove list is empty')
            return 
        

        } else if (this._head.next === null) {
            this._head = null;
            this._tail = null;
            this._size -= 1;
            console.log('Last node is removed list is empty')
            return 

        } else {
            let current = this._head;
            while(current){

                if(current.next === this._tail){
                    current.insertNext(null)
                    this._tail = current;

                }
                current = current.next

            }
        }
        
        this._size -= 1;
        console.log('Last node removed')
    }

    // Returns bool if asked value is in the list or not
    contains(value){ // Toimii
        if (this._head == null){
            return false;
        } else {
            let current = this._head;
            
            if(current.data === value){
                return true;
            }
            
            while(current){

                if(current.data === value){
                    return true;
                }
                current = current.next
            }
        }
        return false;
    }

    // Returns index of the asked value
    find(value){ 
        if (this._head == null){
            console.log('List is empty')
            return 
        } else {
            let currentIndex = 0;
            let current = this._head;
            
            while(current){

                if(current.data === value){
                    return currentIndex;
                }
                current = current.next
                currentIndex += 1;

              
            }
        }
        console.log('No such value')
        return 
    }

    // Prints out values of the linked list
    toString(){ // Toimii
        if (this._head === null){
            console.log('List is empty')
            return 
        } else {
            let current = this._head;
            console.log(current.data)
            
            while(current){

                current = current.next

                if(current){
                    console.log(current.data)
                }
            }
        }
    }
}
