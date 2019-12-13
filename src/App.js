import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import SearchResults from './components/SearchResults'
import data from './data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: data,
      filtered: data,
      filtet: null,
    }
    this.onType = this.onType.bind(this);
  }

  componentDidMount() {
    this.setState({
      found: this.state.filtered.length
    })
  }

  onType(e) {
    let filter = e.target.value.toLowerCase();
    let filtered = this.state.tours.filter(tour => tour.name.toLowerCase().includes(filter));
    let found = filtered.length;
    this.setState({
      filter: filter,
      filtered: filtered,
      found: found
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Find me a tour</h1>
        <SearchBox onType={this.onType} />
        <SearchResults data={this.state.filtered} found={this.state.found} />
      </div>
    );
  }
}

export default App;
