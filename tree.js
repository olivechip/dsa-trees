/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = 0;
    let stack = [this.root];

    while (stack.length > 0){
      let current = stack.pop();

      if (current){
        sum += current.val;
      };

      for (let child of current.children){
        stack.push(child);
      };
    };
    return sum;
  };

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = 0;
    let stack = [this.root];

    while (stack.length > 0){
      let current = stack.pop();

      if (current.val % 2 === 0){
        count ++;
      };

      for (let child of current.children){
        stack.push(child);
      };
    };
    return count;
  };

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, node = this.root) {
    if (!node) return 0;

    let count = node.val > lowerBound ? 1 : 0;
    for (let child of node.children){
      count += this.numGreater(lowerBound, child);
    };
    return count;
  };
};

let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node = new TreeNode(1, [node2, node3]);
let tree = new Tree(node);

module.exports = { Tree, TreeNode };
