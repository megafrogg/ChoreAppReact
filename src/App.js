import React, { Component } from 'react';
import './App.css';
import ChoreList from './components/ChoreList';

class App extends Component {

  constructor() {
    super();
    this.state = {
        users: []
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">

          <div className="user" id="Amanda">
            <h2>Amanda</h2>
            <ChoreList />
            <input type="text" className="textbox" name="chore" placeholder="Chore..." id="amanda-chore-text" required />
            <input type="button" id="amanda-chore-button" value="Add Chore" />
            <input type="button" id="amanda-chore-clear" value="Clear Done" />
          </div>

          <div className="user" id="Rob">
            <h2>Rob</h2>
            <ChoreList />
            <form className="add-chore">
              <input type="text" className="textbox" name="chore" placeholder="Chore..." required />
              <input type="button" className="btn" value="Add Chore" />
              <input type="button" id="amanda-chore-clear" value="Clear Done" />
            </form>
          </div>

          <div className="user" id="Shannon">
            <h2>Shannon</h2>
            <ChoreList />
            <form className="add-chore">
              <input type="text" className="textbox" name="chore" placeholder="Chore..." required />
              <input type="button" className="btn" value="Add Chore" />
              <input type="button" id="amanda-chore-clear" value="Clear Done" />
            </form>
          </div>

          <div className="user" id="Mitchell">
            <h2>Mitchell</h2>
            <ChoreList />
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
