import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 80px 0px 20px 0px;
  h1 {
    font-family: ${({ theme }) => theme.headerFont};
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 2px;
    padding: 20px 0px;
  }
  @media(min-width: 576px) {
    padding: 10px 0px;
    h1 {
      font-size: 3.5rem;
    }
  }
`;