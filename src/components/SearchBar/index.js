import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const SearchBar = ({ inputValue, onChangeInputValue, onSubmitForm }) => {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = () => {
    onSubmitForm(inputValue);
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
        />
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default SearchBar;
