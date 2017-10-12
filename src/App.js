import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import data from './data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchBox />
      </div>
    );
  }
}

export default App;
