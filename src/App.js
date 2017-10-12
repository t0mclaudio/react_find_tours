import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import SearchResults from './components/SearchResults'
import data from './data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchBox />
        <SearchResults data={data} />

      </div>
    );
  }
}

export default App;
