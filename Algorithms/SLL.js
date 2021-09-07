class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLList {
    constructor() {
        this.head = null
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        var node = new Node(value);
        if (this.head == null) {
            this.head = node;
        }
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = node;
        return this;
    }

    // find the given location in your list and append (add after) that location the given value as a new node
    appendValue(loc, val) {
        if (loc == 0) {
            this.addToFront(val)
        }
        var runner = this.head
        var counter = 1
        while (counter != loc) {
            runner = runner.next
            counter += 1
        }
        var new_node = new Node(val)
        var temp = runner.next
        runner.next = new_node
        new_node.next = temp
    }

    // find the given location in your list and prepend (add before) that location the given value as a new node
    prependValue(loc, val) {
        if (loc == 0) {
            this.addToBack(val)
        }
        var runner = this.head
        var counter = 2
        while (counter != loc) {
            runner = runner.next
            counter += 1
        }
        var new_node = new Node(val)
        var temp = runner.next
        runner.next = new_node
        new_node.next = temp
    }

    // locate the min value and move it to the front of your list
    minToFront() {
        if (!this.head || this.head.next == null) {
            return null
        }
        let min = this.head
        let minPrev = this.head
        var runner = this.head
        while (runner.next != null) {
            if (runner.next.value < min.value) {
                min = runner.next
                minPrev = runner
            }
            runner = runner.next
        }
        let temp = this.head.value
        this.head.value = min.value
        min.value = temp
        return this
    }

    // locate the max value and move it to the end of your list
    maxToBack() {
        if (!this.head || this.head.next == null) {
            return null
        }
        let max = this.head
        let maxPrev = this.head
        var runner = this.head
        while (runner.next != null) {
            if (runner.next.value > max.value) {
                max = runner.next
                maxPrev = runner
            }
            runner = runner.next
        }
        maxPrev.next = max.next
        this.addToBack(max.value)
        return this
    }

        // given a list of integers, remove the negative values from the list
        removeNegatives() {
            if (this.head == null) {
                console.log("theres no SLL")
                return this
            }
            while (this.head.value < 0) {
                this.head = this.head.next
            }
            var runner = this.head
            while (runner.next != null) {
                if (runner.next.value < 0) {
                    runner.next = runner.next.next
                } else {
                    runner = runner.next
                }
            }
            return this
    }
    
        // add a given value to your stack
        push(value) {
            var node = new Node(value);
            node.next = this.top;
            this.top = node;
            return this;
        }
    
        // remove and return the top value
        pop() {
            if (this.top == null) {
                return this
            }
            var temp = this.top
            this.top = this.top.next
            temp.next = null
            return temp
        }

    // print the singly linked list
    printValues() {
        if (this.head == null) {
            console.log("There's nothing in this list!");
            return this;
        }
        var runner = this.head;
        while (runner != null) {
            console.log(`${runner.value} --> `);
            // console.log(runner.value + " --> ");
            runner = runner.next;
        }
        return this;
    }

}

const sll = new SLList();
sll.addToFront(-3)
sll.addToFront(-122)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(-5)
sll.addToBack(-15)
sll.addToBack(14)
sll.printValues()
console.log("==========================================")
sll.appendValue(2, 15)
sll.prependValue(4, 10)
sll.minToFront()
sll.maxToBack()
sll.printValues()
console.log("##############################################")
sll.push(25)
sll.removeNegatives()
sll.printValues()