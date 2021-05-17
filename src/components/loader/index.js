/* eslint-disable linebreak-style */
import React from 'react';
import { Loader as LoaderSUI } from 'semantic-ui-react';
import './styles.scss';

const Loader = () => (
  <div className="loader">
    <LoaderSUI active>Chargement...</LoaderSUI>
  </div>
);

export default Loader;
