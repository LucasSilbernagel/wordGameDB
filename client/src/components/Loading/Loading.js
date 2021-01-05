import React from "react";
import { StyledLoading } from './Loading.styled';

function Loading(props) {

  if (!props.loading) {
    return null;
  } else {
    return (
      <StyledLoading>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </StyledLoading>
    )
  }
}

export default Loading;