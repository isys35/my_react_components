import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Select } from './select.js';

ReactDOM.render(
  <Select items={[{value: "1", text: "Text 1"}, {value:"2", text: "Text 2"}, {value: "3", text: "Text 3"}]}/>,
  document.getElementById('root')
);