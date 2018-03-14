const CodeMirror = require('react-codemirror');
const PropTypes = require('prop-types');
const React = require('react');

// Enables syntax highlighting for javascript
require('codemirror/mode/javascript/javascript');
// Enables linting for javascript
require('codemirror/addon/lint/lint');
require('codemirror/addon/lint/javascript-lint');
require('jshint');

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
  lint: true,
};

class ReactCodeMirror extends React.Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    options: PropTypes.object,
  };

  static defaultProps = {
    options: {},
  };

  constructor(props) {
    super(props);

    /* bind non-standard methods, see: https://github.com/goatslacker/alt/issues/283 */
    this.assignRef = this.assignRef.bind(this);

    this.props.options = Object.assign(this.props.options, defaultOptions);
  }

  componentDidMount() {
    setTimeout(() => {
      if (this._codeMirror) {
        this._codeMirror.getCodeMirror().refresh();
      }
    }, 0);
  }

  assignRef(c) {
    this._codeMirror = c;
  }

  render() {
    return (
      <CodeMirror
        data-ui-component={ true }
        ref={ this.assignRef }
        {...this.props}
      />
    );
  }
}

module.exports = ReactCodeMirror;
