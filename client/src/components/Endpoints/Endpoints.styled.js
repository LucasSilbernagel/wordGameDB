import styled from 'styled-components'

export const StyledEndpoints = styled.ul`
  padding: none;
  text-align: center;
  padding: 10px 0px;
  .endpoint {
    margin: 50px 0px;
    .accordion-button,
    h3 {
      font-size: 1.2rem;
      padding: 0px 5px;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }
    .accordion-button {
      border: none;
      margin-bottom: 20px;
      margin-top: 20px;
      width: 100%;
      max-width: 100%;
      font-weight: bold;
      cursor: pointer;
      color: ${({ theme }) => theme.primaryLight};
      background-color: transparent;
      text-decoration: none;
      position: relative;
      line-height: 1.5;
      .param {
        background: ${({ theme }) => theme.secondaryDark};
        pointer-events: none;
        display: inline-block;
      }
    }
    .accordion-button:after {
      font-family: 'Font Awesome 5 Free';
      content: '\f13a';
      display: block;
      color: ${({ theme }) => theme.primaryLight};
      font-size: 3rem;
    }
    .accordion-button.expanded:after {
      font-family: 'Font Awesome 5 Free';
      content: '\f139';
      display: block;
      color: ${({ theme }) => theme.primaryLight};
      font-size: 3rem;
    }
    @media (min-width: 1000px) {
      .accordion-button {
        text-align: left;
      }
      .accordion-button:after,
      .accordion-button.expanded:after {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .accordion.collapsed {
      display: none;
      overflow: hidden;
    }
    h3 {
      text-decoration: underline;
    }
    @media (min-width: 600px) {
      .accordion-button,
      h3 {
        padding: unset;
      }
      .accordion-button {
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
      overflow-y: auto;
      background: #272822;
      p {
        background: unset;
        padding: unset;
        border-radius: unset;
        text-align: center;
      }
      .string {
        color: #fd971f;
      }
      .number {
        color: #66d9ef;
      }
      .boolean {
        color: #a6e22e;
      }
      .null {
        color: #f92672;
      }
      .key {
        color: #f8f8f2;
      }
    }
  }
  @media (min-width: 1000px) {
    .endpoint {
      border: 2px solid ${({ theme }) => theme.primaryLight};
      padding: 20px;
    }
  }
`
