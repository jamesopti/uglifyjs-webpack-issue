import React from 'react';
import { render } from 'react-dom';
import ReactCodeMirror from 'react-codemirror';

// Enables syntax highlighting for javascript
require('codemirror/mode/javascript/javascript');
// Enables linting for javascript
require('codemirror/addon/lint/lint');
require('codemirror/addon/lint/javascript-lint');

window.JSHINT = require('jshint').JSHINT;

const defaultOptions = {
  lint: true,
};

render(
  <ReactCodeMirror
    options={defaultOptions}
    value={'some\ncode'}
  />, document.querySelector('#root')
);
