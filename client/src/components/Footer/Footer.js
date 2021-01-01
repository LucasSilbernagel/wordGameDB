import StyledCopyright from './Copyright.styled';

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <StyledCopyright>
          <a href="https://lucassilbernagel.com/" target="_blank" rel="noopener noreferrer">Lucas Silbernagel</a> <i className="far fa-copyright" aria-label="copyright"></i> 2021
        </StyledCopyright>
      </div>
    </footer>
  )
}

export default Footer;