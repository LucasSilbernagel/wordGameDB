import { StyledLoading } from './Loading.styled'
import { bool } from 'prop-types'

function Loading(props) {
  if (!props.loading) {
    return null
  } else {
    return (
      <StyledLoading>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </StyledLoading>
    )
  }
}

Loading.propTypes = {
  loading: bool.isRequired,
}

export default Loading
