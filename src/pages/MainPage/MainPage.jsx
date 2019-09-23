import React from 'react';
import Layout from '../Layout';
import Header from '../../components/Header';
import SearchBarContainer from '../../components/SearchBar';
import Main from '../../components/Main';

const MainPage = () => (
  <Layout>
    <Header>
      <SearchBarContainer />
    </Header>
    <Main />
  </Layout>
);

export default MainPage;
