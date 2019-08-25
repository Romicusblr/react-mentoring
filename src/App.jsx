import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/film" component={MoviePage} />
      </Switch>
      <Layout />
    </Router>
  </ErrorBoundary>
);

export default App;
