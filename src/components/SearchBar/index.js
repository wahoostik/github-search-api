import React from 'react';
import { Form, Segment } from 'semantic-ui-react';

import './styles.scss';

const SearchBar = () => (
  <Segment>
    <Form>
      <Form.Input
        icon="search"
        iconPosition="left"
        placeholder="Chercher un repo..."
      />
    </Form>
  </Segment>
);

export default SearchBar;
