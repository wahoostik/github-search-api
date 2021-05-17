import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const SearchBar = ({
  inputValue, onChangeInputValue, onSubmitForm, isLoading, onError,
}) => {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = () => {
    if (inputValue.length < 3) {
      onError('Veuillez écrire au moins trois caractères');
    }
    else {
      onSubmitForm(inputValue);
    }
  };

  return (
    <Segment>
      <Form onSubmit={handleOnSubmit}>
        <Form.Input
          icon="search"
          iconPosition="left"
          placeholder="Rechercher un repo..."
          value={inputValue}
          onChange={handleOnChange}
          loading={isLoading}
        />
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onError: PropTypes.func.isRequired,
};

export default SearchBar;
