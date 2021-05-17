/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'semantic-ui-react';

import './styles.scss';

const MoreResults = ({ onClickButton }) => (
  <Container textAlign="center" className="more-results">
    <Button
      color="blue"
      icon="plus"
      size="big"
      content="Afficher plus de résultats..."
      onClick={onClickButton}
    />
  </Container>
);

MoreResults.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};

export default MoreResults;
