import React from 'react';
import Header from '../Header';
// import HeaderMovieDetails from '../HeaderMovieDetails';
import Main from '../Main';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import './App.css';

const App = () => (
  <React.Fragment>
    <ErrorBoundary>
      <Header />
      {/* <HeaderMovieDetails movie={fakeData.data[0]} /> */}
      <Main />
      <Footer />
    </ErrorBoundary>
  </React.Fragment>
);

export default App;
