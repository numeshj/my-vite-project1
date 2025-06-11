import { useEffect, useState } from 'react'

function ArrayMapping() {
  const array = ["cat", "dog", "fish", "bird"];

  return (
    <div>
      <h1>Animal List</h1>
      <h3>
        {array.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </h3>
    </div>
  )
}

export default ArrayMapping