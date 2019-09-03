import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';
import Layout from './pages/Layout';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Layout>
        <Switch>
          <Route path="/search" component={MainPage} />
          <Route path="/film/:id" component={MoviePage} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </Layout>
    </Router>
  </ErrorBoundary>
);

export default App;
