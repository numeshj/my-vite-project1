import { useEffect, useState } from 'react'

function UseEffect2({topic}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Current count:", count)
  }, [count])

  return (
    <div>
      <h1>{topic}</h1>
      <h1>
        Clicked {count} times
      </h1>
      <button onClick={() => setCount(count + 1)}>
        Use Effect 2 - Click me
      </button>
    </div>
  )
}

export default UseEffect2