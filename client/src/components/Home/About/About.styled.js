import styled from 'styled-components';

export const StyledAbout = styled.section`
  padding: 20px 0px;
  span {
    font-weight: 700;
  }
  a {
    color: ${({ theme }) => theme.primaryLight};
    font-weight: 700;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;