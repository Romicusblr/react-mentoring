import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import './App.css';
import fakeData from '../fakeMovies';

const App = () => (
  <React.Fragment>
    <Header />
    <Main data={fakeData.data} />
    <Footer />
  </React.Fragment>
);

export default App;
