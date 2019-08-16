import React from 'react';
import Header from '../Header';
// import HeaderMovieDetails from '../HeaderMovieDetails';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import './App.css';
import MainContainer from '../Main/Main.container';

const App = () => (
  <React.Fragment>
    <ErrorBoundary>
      <Header />
      {/* <HeaderMovieDetails movie={fakeData.data[0]} /> */}
      <MainContainer />
      <Footer />
    </ErrorBoundary>
  </React.Fragment>
);

export default App;
