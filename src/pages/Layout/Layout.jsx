import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import ErrorBoundary from '../../components/ErrorBoundary';
import Footer from '../../components/Footer';

import store from '../../store';

const Layout = ({ children }) => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        {children}
        <Footer />
      </Router>
    </ErrorBoundary>
  </Provider>
);

export default Layout;
