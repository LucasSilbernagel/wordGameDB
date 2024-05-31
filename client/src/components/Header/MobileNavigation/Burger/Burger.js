import { bool, func } from 'prop-types'
import { StyledBurger } from './Burger.styled'

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <StyledBurger
      aria-label={open ? 'close mobile menu' : 'open mobile menu'}
      aria-expanded={open}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
