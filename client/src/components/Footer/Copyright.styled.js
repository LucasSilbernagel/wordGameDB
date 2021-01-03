import styled from 'styled-components';

const StyledCopyright = styled.p`
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
`;

export default StyledCopyright;