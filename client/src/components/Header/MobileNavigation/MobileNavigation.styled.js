import styled from 'styled-components';

export const StyledMobileNavigation = styled.nav`
  display: flex;
  align-items: flex-start;
  
  .mobileNav {
    visibility: hidden;
    position: fixed;
    padding-left: 0;
    z-index: 20;
    width: 100%;
    top: 50px;
    right: -500px;
    transition: all 0.4s ease-in;
    font-size: 2rem;
    text-align: center;
  }
  
  .mobileNav li {
    padding-bottom: 10px;
    padding-top: 10px;
    background: $accent;
  }
  
  .mobileNav li:active {
    background: black;
  }
  
  .mobileNav a {
    display: block;
    width: 100%;
    color: $white;
  }
  
  .openNav {
    right: 0px;
    visibility: visible;
  }

  div {
    width: 60px;
    height: 45px;
    position: fixed;
    right: 30px;
    top: 30px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  
  #navIcon span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 9px;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  #navIcon span:nth-child(1) {
    top: 0px;
  }
  
  #navIcon span:nth-child(2), 
  #navIcon span:nth-child(3) {
    top: 18px;
  }
  
  #navIcon span:nth-child(4) {
    top: 36px;
  }
  
  #navIcon.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
  
  #navIcon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
  #navIcon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  
  #navIcon.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;