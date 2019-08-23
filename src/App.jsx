import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/film/:id" component={MoviePage} />
    </Router>
  </ErrorBoundary>

);

export default App;
