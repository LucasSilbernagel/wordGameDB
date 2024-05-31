import styled from 'styled-components'

export const StyledNotFound = styled.div`
  text-align: center;
  height: 50vh;
  h2 {
    color: red;
    font-size: 3rem;
  }
  a {
    color: ${({ theme }) => theme.primaryLight};
    background: ${({ theme }) => theme.secondaryDark};
    padding: 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    text-decoration: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`
