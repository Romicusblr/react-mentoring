import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BackToMain from '../BackToMain';
import Logo from '../Logo';
import style from './Header.module.css';

const Header = ({ className, children, ...other }) => (
  <section
    className={classNames(style.header, className)}
    {...other}
  >
    <header>
      <Logo />
      <Switch>
        <Route path="/film/">
          <Link to="/">
            <BackToMain />
          </Link>
        </Route>
      </Switch>
    </header>
    {children}
  </section>
);

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  className: '',
  children: null,
};

export default Header;
