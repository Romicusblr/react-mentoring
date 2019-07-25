import React from 'react';
import Button from '../Button';
import SearchInput from '../SearchInput';
import SearchFilter from '../SearchFilter';
import './App.css';

const App = () => (
  <div>
    <SearchInput />
    <Button />
    <SearchFilter
      title="search by"
      options={[{ name: 'title', checked: true }, { name: 'genre' }]}
    />
  </div>
);

export default App;
