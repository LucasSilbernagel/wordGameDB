import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  input,
  textarea {
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.primaryLight};
    box-shadow: 2px 4px ${({ theme }) => theme.secondaryDark};
    width: 100%;
    max-width: 500px;
    font-size: 1.5rem;
    border: none;
    padding: 10px 20px;
    &[type=number] {
      appearance: textfield;
    }
  }
  textarea {
    resize: none;
    height: 300px;
  }
`;