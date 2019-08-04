import React from 'react';
import Header from '../Header';
import HeaderMovieDetails from '../HeaderMovieDetails';
import Main from '../Main';
import Footer from '../Footer';
import './App.css';
import fakeData from '../fakeMovies';

const App = () => (
  <React.Fragment>
    <Header />
    <HeaderMovieDetails />
    <Main data={fakeData} />
    <Footer />
  </React.Fragment>
);

export default App;
