import styled from 'styled-components';

export const StyledEndpoints = styled.div`
  text-align: center;
  padding: 10px 0px;
  .endpoint {
    margin: 50px 0px;
    h2,
    h3 {
      font-size: 1.2rem;
      padding: 0px 5px;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }
    h2 {
      margin-bottom: 20px;
      text-decoration: underline;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      line-height: 1.5;
      span {
        background: ${({ theme }) => theme.secondaryDark};
        pointer-events: none;
      }
    }
    h2:after {
      font-family: "Font Awesome 5 Free";
      content: "\f13a";
      display: block;
      color: ${({ theme }) => theme.primaryLight};
      font-size: 3rem;
    }
    h2.expanded:after {
      font-family: "Font Awesome 5 Free";
      content: "\f139";
      display: block;
      color: ${({ theme }) => theme.primaryLight};
      font-size: 3rem;
    }
    @media(min-width: 1000px) {
      h2 {
        text-align: left;
      }
      h2:after,
      h2.expanded:after {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .accordion.collapsed {
      height: 0px;
      overflow: hidden;
    }
    h3 {
      text-decoration: underline;
    }
    @media(min-width: 600px) {
      h2,
      h3 {
        padding: unset;
      }
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.4rem;
      }
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
  @media(min-width: 1000px) {
    .endpoint {
      border: 2px solid ${({ theme }) => theme.primaryLight};
      padding: 20px;
    }
  }
`;