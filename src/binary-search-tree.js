const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    if (!this.rootNode) return this.rootNode;
    else return this.rootNode;
  }

  add(value) {
    this.rootNode = addInside(this.rootNode, value);
    function addInside(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addInside(node.left, value);
      } else {
        node.right = addInside(node.right, value);
      }
      return node;
    }
  }

  has(value) {
    return searchInside(this.rootNode, value);
    function searchInside(node, value) {
      if (!node) return false;
      if (node.data === value) return true;
      if (value < node.data) return searchInside(node.left, value);
      else return searchInside(node.right, value);
    }
  }

  find(value) {
    return searchNodeInside(this.rootNode, value);
    function searchNodeInside(node, value) {
      if (!node) return null;
      if (node.data === value) return node;
      if (value < node.data) return searchNodeInside(node.left, value);
      else return searchNodeInside(node.right, value);
    }
  }

  remove(value) {
    this.rootNode = removeNode(this.rootNode, value);
    function removeNode(node, value) {
      if (!node) return null;
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRigth = node.right;
        while (minRigth.left) {
          minRigth = minRigth.left;
        }
        node.data = minRigth.data;
        node.right = removeNode(node.right, minRigth.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) return;
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) return;
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
