class Node{
    constructor(data , next = null){
        this.data = data;
        this.next = next;
    }
}

// class related to LinkedList

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    // insert first node 

    firstNodeList(data){
        this.head = new Node(data , this.head)  
        console.log(this.head);
        this.size++;
    }

    // insert LastNode

    lastNodeList(data){
        let node = new Node(data)
        let current;
        // check for empty
        if(!this.head){
            this.head = node
        }else{
            current = this.head;
            while (current.next) {
                current=current.next
                // console.log(current);
            }
            current.next=node;
            // console.log(current.next);
        }
        this.size++
    }

    // insert linkedLisrtIndex

    indexListNode(data , index){
        if(index > 0 && index > this.size){
            console.log('noo');
            return;
        }

        if(index === 0){
            this.head = new Node(data , this.head)
            // console.log('yes');
            return;
        }
        
        let node = new Node(data)
        // console.log(node , 'jjj');

        let previous ;

        let current = this.head
        // console.log(current , 'cccc')
        let count = 0
        while (count<index) {
            previous = current
            // console.log(previous);
            count++
            current = current.next
            // console.log(current);
        }

        node.next = current;
        previous.next = node

        this.size++
    }

    // get th index of node

    getAt(index){
        let current = this.head
        // console.log(current , 'jdgaj');
        let count = 0
        while (current) {
            if(count === index){
                // console.log(current.data, 'Hello iam your index');

                return current.data
            }
            count++;
            current = current.next
        }
        return null;
    }

    // Remove from List

    RemoveFromList(index){
        if(index > 0 && index > this.size){
            return ;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.next
        }else{
            while (count < index) {
                count++;
                previous = current;
                // console.log(previous);
                current=current.next
                // console.log(current);
            }
            previous.next = current.next
            // console.log(previous);
        }
        this.size--
    }

    //Clear List

    clearList(){
        this.head = null;
        this.size = 0;
    }


    // printList

    printList(){
        let current = this.head
        // console.log(current);
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

    
}


const x = new LinkedList()

x.firstNodeList(100)
x.firstNodeList(200)
x.firstNodeList(300)
x.lastNodeList(400)
x.indexListNode(500 , 2)
x.getAt(3)
x.RemoveFromList(1)
x.printList()
console.log(x);