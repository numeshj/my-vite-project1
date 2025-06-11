function FunctionRetunElement({topic}) {
  return (
    <div>
      <h2> Hello - {topic}</h2>
      {
        1 ===2
        ? <h2>World - {topic}</h2>
        : null  }
    </div>
  )
}

export default FunctionRetunElement;
