import React from "react";
import ReactDOM from "react-dom";
import BinaryTree from "./components/binaryTree.component";
import BinaryTreeService from "./services/binaryTree.service";
import "./styles.css";

function App(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App>
    <BinaryTree filter={BinaryTreeService} />
  </App>,
  rootElement
);
