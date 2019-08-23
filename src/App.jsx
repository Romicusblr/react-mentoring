import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
// import HeaderMovieDetails from './components/HeaderMovieDetails';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import MainContainer from './components/Main/Main.container';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Header />
      {/* <HeaderMovieDetails movie={fakeData.data[0]} /> */}
      <MainContainer />
      <Footer />
    </Router>
  </ErrorBoundary>

);

export default App;
