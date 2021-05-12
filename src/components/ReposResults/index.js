import React from 'react';
import { Card } from 'semantic-ui-react';

import './styles.scss';

import Repo from './Repo';

const ReposResults = (() => (
  <div>
    ReposResults
    <Card.Group itemsPerRow={3} stackable>
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
    </Card.Group>
  </div>
));

export default ReposResults;
