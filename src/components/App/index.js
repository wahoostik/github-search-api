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
import Loader from 'src/components/Loader';
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

  const [results, setResults] = useState([]); // Récupérer les datas pour les stocker dans le state
  const [inputValue, setInputValue] = useState(''); // Contrôler l'input de recherche
  const [searchQuery, setSearchQuery] = useState(''); // Pour stocker la valeur au moment du submit.
  const [loading, setLoading] = useState(false); // Etat du loading sur l'input et du composant
  const [total, setTotal] = useState(0); // Nombre de repos trouvé par recherche
  const [message, setMessage] = useState(''); // Message qui varie selon le statut
  const [hasError, setHasError] = useState(false); // Message d'erreur pour avertir l'utilisateur

  const baseUrl = `https://api.github.com/search/repositories?q=${searchQuery}`;

  const reset = () => {
    setHasError(false);
    setResults([]);
    setTotal(0);
    setMessage('');
  };

  useEffect(async () => {
    if (searchQuery) {
      try {
        reset();
        setLoading(true);
        setMessage('Veuillez patienter...');
        const response = await axios.get(baseUrl);
        const items = resultsParser(response.data.items);
        const totalResults = response.data.total_count;
        setResults(items);
        setTotal(totalResults);
        setMessage(`La recherche a générée ${totalResults} résultat${totalResults > 1 ? 's' : ''}`);
      }
      catch (error) {
        setMessage('Une erreur s\'est produite');
        setHasError(true);
        console.trace(error);
      }
      finally {
        setLoading(false);
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
        isLoading={loading}
        onError={(errorMessage) => {
          setMessage(errorMessage);
          setHasError(true);
        }}
      />
      {message && <Message message={message} hasError={hasError} />}
      {loading && (
        <Loader />
      )}
      <ReposResults results={results} />
    </div>
  );
};

// == Export
export default App;
