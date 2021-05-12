/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import logo from 'src/assets/images/logo-github.png';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <div className="header">
      <img src={logo} alt="github logo" />
    </div>
    <SearchBar />
    <Message />
    <ReposResults />
  </div>
);

// == Export
export default App;
