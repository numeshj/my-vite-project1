import { useRef } from 'react'

function UseRef({topic}) {
  const counter = useRef(0)

  function clickEvent() {
    counter.current += 1
    console.log("You clicked me", counter.current, "times")
  }

  return (
    <div>
      <h1>{topic}</h1>
      <button onClick={clickEvent}>
        Use REF - Click me
      </button>
    </div>
  )
}

export default UseRef