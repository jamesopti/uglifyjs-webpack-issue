import React from 'react'
import ReactCodeMirror from './codemirror';
const USER =  'USER';

const initialValue = `HEY
HERE
IS 
SOME
CODE
`;

class Dashboard extends React.Component {
  state = {
    code: initialValue,
  };

  static renderUser(usr) {
    console.log('Rendering markup for ' + usr);
    return (
      <span key="usrName">{ usr }</span>
    )
  }

  static update(e) {
    console.log('update');
  }

  render() {
    return (
      <div>

        <h2> Welcome, { Dashboard.renderUser(USER) }, to the Webpack Playground</h2>

        <ReactCodeMirror
          onChange={ this.update }
          value={this.state.code}
        />
      </div>
    )
  }
}

export default Dashboard;