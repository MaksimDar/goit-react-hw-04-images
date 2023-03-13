import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLoadMore, ButtonContainer } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <ButtonContainer>
      <ButtonLoadMore type="button" onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </ButtonContainer>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
