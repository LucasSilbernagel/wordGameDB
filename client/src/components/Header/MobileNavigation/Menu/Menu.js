import { useEffect } from 'react'
import { bool, func } from 'prop-types'
import { StyledMenu } from './Menu.styled'
import { Link } from 'react-router-dom'

const Menu = ({ open, setOpen, ...props }) => {
  useEffect(() => {
    if (open) {
      /** Close menu when Escape key is pressed */
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setOpen(false)
        }
      })
    } else {
      document.removeEventListener('keydown', (e) => e.key === 'Escape')
    }
  }, [open, setOpen])

  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        Home
      </Link>
      <Link to="/endpoints" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        Endpoints
      </Link>
      <Link to="/contact" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        Contact
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Menu
