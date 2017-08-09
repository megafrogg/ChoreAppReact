import React, { Component } from 'react';
import './App.css';
import ChoreList from './components/ChoreList';
import AddChore from './components/AddChore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
      <MuiThemeProvider>
        <div className="container">

          <div className="user" id="Amanda">
            <h2>Amanda</h2>
            <ChoreList />
            <AddChore />
          </div>

          <div className="user" id="Rob">
            <h2>Rob</h2>
            <ChoreList />
            <AddChore />
          </div>

          <div className="user" id="Shannon">
            <h2>Shannon</h2>
            <ChoreList />
            <AddChore />
          </div>

          <div className="user" id="Mitchell">
            <h2>Mitchell</h2>
            <ChoreList />
            <AddChore />
          </div>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
