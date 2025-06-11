import { useEffect, useState } from 'react'

function OneParentElement({topic}) {
  return (
    <div>
      <h2>{topic}</h2>
      <p>This is a paragraph inside the parent element.</p>
    </div>
  )
}

export default OneParentElement