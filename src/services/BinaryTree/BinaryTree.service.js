import Node from "./BaseBinarySearchTreeNode";

//
class BinarySearchTreeService {

  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          console.log("ADD:==>", data, data, data > node.data);
          if (node.right === null) {
            node.right = new Node(data);
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else return null;
      };

      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    if (current === null) return null;
    console.log("current:=>", current);
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  findMax() {
    let count = 0;

    let current = this.root;
    if (current === null) return null;
    console.log("current:=>", current);
    while (current.right !== null) {
      current = current.right;
      count++;
    }
    console.log("CoUNT,", count);
    return current.data;
  }

  find(data) {
    let current = this.root;

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if(current === null) {
        return null;
      }
    }
    return current
  }

  isExist(data) {
    let current = this.root;

    while(current) {
      if(data === current.data) {
        return true;
      } else {
        if(data < current.data) {
          current = current.left;
        } else {
          current = current.right
        }
      }
    }

    return false
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data === node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }
}

export default BinarySearchTreeService;
