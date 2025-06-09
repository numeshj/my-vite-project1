import { useEffect, useState } from 'react'

function RelativeFunction() {

  function myFunction() {
    alert("Hello from Relative Function");
  }

  return (
    <div>
      <button onClick={myFunction}>
        Relative Function - Click Me
      </button>
    </div>
  )
}


export default RelativeFunction