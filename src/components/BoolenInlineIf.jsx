function BoolenInlineIf({ topic }) {
  return 1 === 2
    ? <h2>Hello</h2>
    : <h2>World - {topic}</h2>;
}

export default BoolenInlineIf;