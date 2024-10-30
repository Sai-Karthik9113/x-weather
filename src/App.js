import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

export const config = {
  endpoint: "https://api.weatherapi.com/v1/current.json"
};

function App() {
  return (
    <div className="App">
      <SearchBox />
    </div>
  );
}

export default App;
