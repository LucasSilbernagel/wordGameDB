import styled from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.secondaryAccent};
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 10px;
  box-shadow: 5px 8px ${({ theme }) => theme.primaryAccent};
  cursor: pointer;
  transition: all 0.4s;
  &:hover,
  &:focus {
    box-shadow: 5px 8px ${({ theme }) => theme.primaryLight};
  }
  &:active {
    box-shadow: 2px 4px ${({ theme }) => theme.primaryLight};
  }
`
