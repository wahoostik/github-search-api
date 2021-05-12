import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const SearchBar = ({ inputValue, onChangeInputValue }) => {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };
  return (
    <Segment>
      <Form>
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
};

export default SearchBar;
