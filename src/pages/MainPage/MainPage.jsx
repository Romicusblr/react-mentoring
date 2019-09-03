import React from 'react';
import Header from '../../components/Header';
import SearchBarContainer from '../../components/SearchBar';
import Main from '../../components/Main';

const MainPage = () => (
  <>
    <Header>
      <SearchBarContainer />
    </Header>
    <Main />
  </>
);

export default MainPage;
