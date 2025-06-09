function FunctionRetunElement2({topic}) {
  return (
<div>
  <h2> Hello - {topic}</h2>
  {(1===2) && <h2>World</h2>}
</div>
  );
}

export default FunctionRetunElement2;
