/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import logo from 'src/assets/images/logo-github.png';
import './styles.scss';

//import reposData from 'src/data/repos';

// == Composant
const App = () => {
  // fonction qui vient alléger les propriété des objets de résultats
  // on aura une meilleure vue sur ce qu'on passe à nos composants
  const resultsParser = (repos) => repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    owner: {
      avatar_url: repo.owner.avatar_url,
      login: repo.owner.login,
    },
    description: repo.description ? repo.description : 'No description', // Si il n'y a pas de description
  }));

  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const baseUrl = `https://api.github.com/search/repositories?q=${searchQuery}`;

  useEffect(async () => {
    if (searchQuery) {
      try {
        const response = await axios.get(baseUrl);
        const items = resultsParser(response.data.items);
        setResults(items);
      }
      catch (error) {
        console.trace(error);
      }
    }
    // ici on demande à useEffect d'exécuter la fonction passé en arguments
    // à chaque fois que searchQuery change => watcher
    // le tableau de dépendances
  }, [searchQuery]);

  return (
    <div className="app">
      <div className="app__header">
        <a href="/">
          <img src={logo} alt="github logo" />
        </a>
      </div>
      <SearchBar
        inputValue={inputValue}
        onChangeInputValue={setInputValue}
        onSubmitForm={setSearchQuery}
      />
      <Message message="La recherche a générée XXXX résultats" />
      <ReposResults results={results} />
    </div>
  );
};

// == Export
export default App;
