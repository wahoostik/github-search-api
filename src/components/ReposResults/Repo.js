import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './styles.scss';

const Repo = (() => (
  <Card>
    <Image src="https://avatars.githubusercontent.com/u/69631?v=4" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Anthony</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2021</span>
      </Card.Meta>
      <Card.Description>
        Anthony is a good guy
      </Card.Description>
    </Card.Content>
  </Card>
));

export default Repo;
