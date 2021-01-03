import styled from 'styled-components';

export const StyledDesktopNavigation = styled.nav`
  text-transform: uppercase;
  display: none;
  @media (min-width: 576px) {
      display: flex;
    }
  ul {
    display: flex;
  }
  a {
    color: #FFFFFF;
  text-decoration: none;
  }
`;