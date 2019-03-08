import React from 'react';
import ReactDOM from 'react-dom';
import BinaryTreeComponent from './BinaryTree.component';

it('BinaryTreeComponent component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BinaryTreeComponent/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
