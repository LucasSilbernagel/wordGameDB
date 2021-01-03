import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 80px 0px 10px 0px;
  h1 {
    font-family: ${({ theme }) => theme.headerFont};
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;