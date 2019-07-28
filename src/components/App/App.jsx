import React from 'react';
import Header from '../Header';
import Main from '../Main';
import './App.css';
import fakeData from '../fakeMovies';

const App = () => (
  <React.Fragment>
    <Header />
    <Main data={fakeData.data} />
  </React.Fragment>
);

export default App;
