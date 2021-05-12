/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import logo from 'src/assets/images/logo-github.png';
import './styles.scss';

import reposData from 'src/data/repos';

// == Composant
const App = () => (
  <div className="app">
    <div className="app__header">
      <a href="/">
        <img src={logo} alt="github logo" />
      </a>
    </div>
    <SearchBar />
    <Message message="La recherche a générée XXXX résultats" />
    <ReposResults results={reposData.items} />
  </div>
);

// == Export
export default App;
