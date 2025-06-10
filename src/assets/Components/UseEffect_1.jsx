import { useEffect, useState } from 'react'

function UseEffect1({topic}) {
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
        Use Effect 1 - Click me
      </button>
      <hr/>
      <button onClick={() => setCount(count - 1)}>
        Decrease Count
      </button>
      <hr/>
      <button onClick={() => setCount(0)}>
        Reset Count
      </button>

    </div>
  )
}

export default UseEffect1