import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/film/:id" component={MoviePage} />
      </Switch>
    </Router>
  </ErrorBoundary>
);

export default App;
