import React from 'react'

export default function componentName({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
}
