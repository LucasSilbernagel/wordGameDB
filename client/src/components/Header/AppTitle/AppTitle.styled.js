import styled from 'styled-components';

export const StyledAppTitle = styled.h1`
  font-family: ${({ theme }) => theme.headerFont};
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 2px;
`;