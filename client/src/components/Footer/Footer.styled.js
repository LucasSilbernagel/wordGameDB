import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 20px 0px;
  p {
    background: unset;
    padding: unset;
    border-radius: unset;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.secondaryDark};
    a {
      color: ${({ theme }) => theme.secondaryDark};
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
`;