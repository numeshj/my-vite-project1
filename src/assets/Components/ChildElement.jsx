function ChildElemenet({ topic }) {
  const child = 1 === 2 ? <h2>Hello - {topic}</h2> : <h2>World - {topic}</h2>;

  return (
    <div>
      <h1>Hello</h1>
      {child}
    </div>
  );
}

export default ChildElemenet;
