import React from "react";
import ReactDOM from "react-dom";
import BinaryTree from "./components/BinaryTree/BinaryTree.component";
import LinkedList from "./components/LinkedList/LinkedList.component"
import "./styles.css";
import App from './App'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App>
    <BinaryTree/>
    <LinkedList/>
  </App>,
  rootElement
);
