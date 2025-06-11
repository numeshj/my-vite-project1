import { useEffect, useState } from 'react'

function ElementList() {
  const array = ["cat", "dog", "fish", "bird"];

  const element = []

  for (let i =0; i < array.length; i++) {
    element.push (
      <button key={i}>
      {array[i]}
      </button>
    )
  }

  return(
    <div>
      <h1> Animals</h1>
      <h3>{element}</h3>  
    </div>

  )
}

export default ElementList