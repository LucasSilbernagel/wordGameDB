import styled from 'styled-components'

export const StyledDesktopNavigation = styled.nav`
  text-transform: uppercase;
  display: none;
  @media (min-width: 576px) {
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 600px;
    padding: 20px;
  }
  a {
    color: ${({ theme }) => theme.primaryDark};
    transition: all 0.4s;
    padding: 0px 5px;
    font-weight: 700;
    text-decoration: none;
    font-size: 1.5rem;
    border-right: 4px solid ${({ theme }) => theme.secondaryAccent};
    border-bottom: 4px solid ${({ theme }) => theme.secondaryAccent};
    box-shadow: 5px 5px ${({ theme }) => theme.primaryAccent};
    &:hover,
    &:focus {
      box-shadow: 5px 5px ${({ theme }) => theme.primaryLight};
    }
  }
`
