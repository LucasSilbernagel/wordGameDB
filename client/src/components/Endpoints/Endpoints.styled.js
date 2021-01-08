import styled from 'styled-components';

export const StyledEndpoints = styled.section`
  text-align: center;
  padding: 10px 0px;
  .endpoint {
    margin-bottom: 100px;
    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      text-decoration: underline;
    }
    h3 {
      font-size: 1.4rem;
      text-decoration: underline;
    }
    ul {
      padding: unset;
      text-align: left;
      font-size: 1.4rem;
      margin: 0 auto;
      max-width: 500px;
      p {
        margin: 0;
        border-radius: unset;
      }
    }
    pre {
    font-size: 1.1rem;
    text-align: center;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.secondaryAccent};
    max-width: 500px;
    height: 500px;
    margin: 0 auto;
    margin-top: 25px;
    overflow-y: scroll;
    background: #272822;
      p {
        background: unset;
        padding: unset;
        border-radius: unset;
        text-align: center;
      }
      .string { 
      color: #FD971F; 
      }
      .number { 
        color: #66D9EF; 
      }
      .boolean { 
        color: #A6E22E; 
      }
      .null { 
        color: #F92672; 
      }
      .key { 
        color: #F8F8F2; 
      }
    }
  }
`;