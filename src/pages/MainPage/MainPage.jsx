import React from 'react';
import Layout from '../Layout';
import Header from '../../components/Header';
import SearchBarContainer from '../../components/SearchBar';

const MainPage = () => (
  <>
    <Header>
      <SearchBarContainer />
    </Header>
    <Layout />
  </>
);

export default MainPage;
