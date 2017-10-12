import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import SearchResults from './components/SearchResults'
import data from './data'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {tours: data}
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
    this.setState({tours: filtered})
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchBox onType={(e) => this.onType(e) } />
        <SearchResults data={this.state.tours} />
      </div>
    );
  }
}

export default App;
