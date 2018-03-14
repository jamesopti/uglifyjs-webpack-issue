import CodeMirror from './codemirror';
import React from 'react';
import { render } from 'react-dom';

const defaultOptions = {
  // Custom written option to show errors in gutters
  annotations: true,
  // Add Ctrl-Enter to the keymap so it will fire the keyHandled event when pressed
  extraKeys: {
    'Ctrl-Enter': function() {},
    'Ctrl-Space': 'autocomplete',
  },
  fixedGutter: true,
  // Required for annotations to work
  gutters: ['CodeMirror-lint-markers'],
  lineNumbers: true,
  lineWrapping: true,
  matchBrackets: true,
  mode: 'javascript',
  tabSize: 2,
  lint: true
};

window.myCodeMirror = CodeMirror.fromTextArea(document.getElementById('text1'), defaultOptions);
window.myCodeMirror.setValue('garbledygookgarbledygookgarbledygook\ngarbledygookgarbledygookgarbledygook\n\n\n\n\n\n\n\n');
window.myCodeMirror.lint();


import Dashboard from './components/Dashboard';

render(<Dashboard />, document.querySelector('#root'));
