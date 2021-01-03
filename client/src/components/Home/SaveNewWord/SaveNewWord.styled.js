import styled from 'styled-components';

export const StyledSaveNewWord = styled.div`
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    input {
      margin-bottom: 20px;
      background-color: ${({ theme }) => theme.primaryLight};
      box-shadow: 2px 4px ${({ theme }) => theme.secondaryDark};
      width: 100%;
      font-size: 1.5rem;
      border: none;
      padding: 10px 5px;
      &[type=number] {
        appearance: textfield;
      }
    }
  }
`;