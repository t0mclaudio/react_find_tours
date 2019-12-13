import React, { useState } from 'react';
import SearchBox from './components/SearchBox'
import SearchResults from './components/SearchResults'
import data from './data'

const App = () => {
  const [tours] = useState(data);
  const [filtered, setFiltered] = useState(tours);
  const [found, setFound] = useState(filtered.length);

  const onType = (e) => {
    let keyword = e.target.value.toLowerCase();
    let filtered_by = tours.filter(tour => tour.name.toLowerCase().includes(keyword))
    setFiltered(filtered_by);
    setFound(filtered_by.length)
  }

  return (
    <div className="App">
      <h1>Find me a tour</h1>
      <SearchBox onType={e => onType(e)} />
      <SearchResults data={filtered} found={found} />
    </div>
  );
}

export default App;
