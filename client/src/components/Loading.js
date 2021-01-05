import React from "react";

function Loading(props) {

  if (!props.loading) {
    return null;
  } else {
    return (
      <p>Loading...</p>
    )
  }
}

export default Loading;