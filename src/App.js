import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

          <div className="user" id="Amanda">
            <h2>Amanda</h2>
            <ul className="chores" id="amanda-chores">
              <li>Sweep some shit</li>
            </ul>
            <input type="text" className="textbox" name="chore" placeholder="Chore..." id="amanda-chore-text" required />
            <input type="button" id="amanda-chore-button" value="Add Chore" />
            <input type="button" id="amanda-chore-clear" value="Clear Done" />
          </div>

          <div className="user" id="Rob">
            <h2>Rob</h2>
            <ul className="chores" id="rob-chores">
            </ul>
            <form className="add-chore">
              <input type="text" className="textbox" name="chore" placeholder="Chore..." required />
              <input type="button" className="btn" value="Add Chore" />
              <input type="button" id="amanda-chore-clear" value="Clear Done" />
            </form>
          </div>

          <div className="user" id="Shannon">
            <h2>Shannon</h2>
            <ul className="chores" id="shannon-chores">
            </ul>
            <form className="add-chore">
              <input type="text" className="textbox" name="chore" placeholder="Chore..." required />
              <input type="button" className="btn" value="Add Chore" />
              <input type="button" id="amanda-chore-clear" value="Clear Done" />
            </form>
          </div>

          <div className="user" id="Mitchell">
            <h2>Mitchell</h2>
            <ul className="chores" id="mitchell-chores">
            </ul>
            <form className="add-chore">
              <input type="text" className="textbox" name="chore" placeholder="Chore..." required />
              <input type="button" className="btn" value="Add Chore" />
              <input type="button" id="amanda-chore-clear" value="Clear Done" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
