import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 20px 0px;
  p {
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.secondaryDark};
    a {
      color: ${({ theme }) => theme.secondaryDark};
      text-decoration: none;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledFooter;