class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
        this.valArr = []
    }
    add(value) {
        if (this.valArr.includes(value)) { console.log("duplicate"); return }
        this.valArr.push(value)
        let runner = this.root
        if (runner == null) {
            this.root = new BSTNode(value)
        } else {
            while (runner != null) {
                if (runner.value < value) {
                    if (runner.right == null) { runner.right = new BSTNode(value); return }
                    runner = runner.right
                } else if (runner.value > value) {
                    if (runner.left == null) { runner.left = new BSTNode(value); return }
                    runner = runner.left
                }
            }
        }
    }
    findMin() {
        let runner = this.root
        while (runner.left != null) { runner = runner.left }
        return runnder.value
    }

    findMax() {
        let runner = this.root
        while (runner.right != null) { runner = runner.right }
        return runner.value
    }

    height(rootNode = this.root) {
        if (rootNode === null) {
            return 0;
        } else {
            var leftHeight = this.height(rootNode.left)
            var rightHeight = this.height(rootNode.right)
            if (leftHeight > rightHeight) {
                return leftHeight + 1
            } else {
                return rightHeight + 1
            }
        }
    }

    contains(value) {
        let runner = this.root
        while (runner != null) {
            if (value < runner.value) { runner = runner.left }
            else if (value > runner.value) { runner = runner.right }
            else if (value == runner.value) { return true }
        }
        return false
    }

    containsCheat(value) {
        return this.valArr.includes(value)
    }

    printTree(node) {
        console.log("Current node = ", node.value)
        if (node.left != null) {
            console.log("Left node of ", node.value, " = " + node.left.value)
            this.printTree(node.left)
        }
        if (node.right != null) {
            console.log("Right node of ", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }
    }
}

var bst = new BST()
bst.add(20)
bst.add(15)
bst.add(25)
bst.add(2)
bst.contains(2)
bst.printTree(bst.root)
console.log(bst.height())