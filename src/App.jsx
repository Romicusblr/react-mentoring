import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './pages/Layout';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Switch>
        <Header>
          <Route exact path="/" component={MainPage} />
          <Route path="/film/:id" component={MoviePage} />
        </Header>
      </Switch>
      <Layout />
    </Router>
  </ErrorBoundary>
);

export default App;
