import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import SearchResults from './components/SearchResults'
import data from './data'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {tours: data}
    this.found = this.state.tours.length
  }
  onType(e) {
    var filtered = []
    data.map((obj)=>{
      let name = obj.name.toLowerCase()
      let keyword = e.target.value.toLowerCase()
      if (name.includes(keyword)){
        filtered.push(obj)
      }
    })
    this.found = filtered.length
    this.setState({tours: filtered})
  }
  render() {
    return (
      <div className="App">
        <h1>Find me a tour</h1>

        <SearchBox onType={(e) => this.onType(e) } />
        <SearchResults data={this.state.tours} found={this.found} />

      </div>
    );
  }
}

export default App;
