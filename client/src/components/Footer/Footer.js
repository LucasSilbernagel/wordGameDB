import { StyledFooter } from './Footer.styled'

function Footer() {
  return (
    <StyledFooter>
      <div className="wrapper">
        <p>
          Built by{' '}
          <a
            href="https://lucassilbernagel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Silbernagel
          </a>
        </p>
      </div>
    </StyledFooter>
  )
}

export default Footer
