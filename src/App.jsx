import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';
import Layout from './pages/Layout';

const App = () => (
  <Layout>
    <Switch>
      <Redirect exact from="/" to="/search" />
      <Route path="/search" component={MainPage} />
      <Route path="/film/:id" component={MoviePage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Layout>
);

export default App;
