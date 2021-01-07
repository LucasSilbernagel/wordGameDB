import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  right: ${({ open }) => open ? '0' : '-200%'};
  height: 100vh;
  padding: 2rem;
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  @media (min-width: 576px) {
      display: none;
    }
  a {
    font-size: 2rem;
    text-align: center;
    font-family: ${({ theme }) => theme.mainFont};
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 700;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.secondaryAccent};
    }
  }
`;