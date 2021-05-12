import React from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({ message }) => (
  <MessageSUI>{message}</MessageSUI>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
