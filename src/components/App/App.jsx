import React from 'react';
import Header from '../Header';
import SearchBody from '../SearchBody';
import './App.css';
import data from '../fakeMovies';

const App = () => (
  <div>
    <Header />
    <SearchBody data={data.data} />
  </div>
);

export default App;
