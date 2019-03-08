import React, { Component } from "react";
import BinaryTreeService from "./../services/BinaryTree.service";

const binaryTree = new BinaryTreeService();

class BinaryTree extends Component {
  state = {
    data: [6, 10, 4, -1, 4, 7777, 38, 1, 4, 54, 64, 74, 8, 9, 7777777]
  };

  render() {
    this.state.data.forEach((item) => {
      console.log("item:==>", item);
      binaryTree.add(item);
    });

    if (binaryTree) {
      console.log("MIN:=>", binaryTree.findMin());
      console.log("MAX:=>", binaryTree.findMax());
      console.log("FIND 64:=>", binaryTree.find(64));
      console.log("EXIST 64:=>", binaryTree.isExist(64));
      console.log("EXIST -2:=>", binaryTree.isExist(-2));
    }
    return (
      <React.Fragment>
        React hello
      </React.Fragment>);
  }
}

export default BinaryTree;
