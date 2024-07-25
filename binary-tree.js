/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // Base Case
    if (!this.root) return 0;

    // Helper function on Node
    function depth(node){
      if (!node) return 0; //No node
      if (!node.left & !node.right) return 1; //Leaf Node

      const leftDepth = depth(node.left);
      const rightDepth = depth(node.right);

      return Math.min(leftDepth, rightDepth) + 1; //Recursive Case
    } 
    return depth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function depth(node){
      if (!node) return 0; //No node
      if (!node.left & !node.right) return 1; //Leaf Node

      const leftDepth = depth(node.left);
      const rightDepth  = depth(node.right);

      return Math.max(leftDepth, rightDepth) + 1;
    }
    return depth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;
    
    function sum(node){
      if (!node) return 0;

      const leftSum = Math.max(0, sum(node.left));
      const rightSum = Math.max(0, sum(node.right));

      const currentMax = node.val + leftSum + rightSum;
      maxSum = Math.max(maxSum, currentMax);

      return node.val + Math.max(leftSum, rightSum);
    }
    sum(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = null) {
    if (!node) return null;

    let smallest = null;

    function findNextLarger(node){
      if (!node) return;

      if (node.val > lowerBound && (smallest === null || node.val < smallest)){
        smallest = node.val;
      }

      for (let child of node.children){
        findNextLarger(child);
      }
    }

    findNextLarger(this.root);
    return smallest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root || !node1 || !node2) return false;

    function findLevel(node, target, level = 0){
      if (!node) return null;

      if (node === target) return { level };

      let left = findLevel(node.left, target, level + 1);
      if (left) return left;
    
      return findLevel(node.right, target, level + 1);
    }

    let node1Info = findLevel(this.root, node1);
    let node2Info = findLevel(this.root, node2);

    if (!node1Info || !node2Info) return false;

    return node1Info.level === node2Info.level;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
