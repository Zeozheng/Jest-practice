import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';

test("renders without crashing",()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>,div)
})