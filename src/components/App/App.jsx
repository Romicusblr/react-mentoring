import React from 'react';
import Header from '../Header';
import SearchBody from '../SearchBody';
import './App.css';
import data from '../fakeMovies';

const App = () => (
  <React.Fragment>
    <Header />
    <SearchBody data={data.data} />
  </React.Fragment>
);

export default App;
