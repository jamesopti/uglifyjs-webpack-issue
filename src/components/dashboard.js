import React from 'react'
import ReactCodeMirror from './codemirror';
const USER =  'USER';

class Dashboard extends React.Component {
  renderUser(usr) {
    console.log('Rendering markup for ' + usr);
    return (
      <span key="usrName">{ usr }</span>
    )
  }

  update(e) {
    console.log('update');
  }

  render() {
    return (
      <div>

        <h2> Welcome, { this.renderUser(USER) }, to the Webpack Playground</h2>

        <ReactCodeMirror
          onChange={ this.update }
          value={this.state.code}
        />
      </div>
    )
  }
}

export default Dashboard;