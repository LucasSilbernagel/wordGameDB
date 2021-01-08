import { StyledFooter } from './Footer.styled';

function Footer() {
  return (
    <StyledFooter >
      <div className="wrapper">
        <p>
          <a href="https://lucassilbernagel.com/" target="_blank" rel="noopener noreferrer">Lucas Silbernagel</a> <i className="far fa-copyright" aria-label="copyright"></i> 2021
        </p>
      </div>
    </StyledFooter >
  )
}

export default Footer;