import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNotFound } from './NotFound.styled';

const NotFound = () => (

  <StyledNotFound>
    <h2>404 - Page not found!</h2>
    <Link to="/">
      ⬅ Go Home
    </Link>
  </StyledNotFound>
  
);

export default NotFound;