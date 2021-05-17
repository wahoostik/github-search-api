import React from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({ message, hasError }) => (
  <MessageSUI negative={hasError}>{message}</MessageSUI>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default Message;
