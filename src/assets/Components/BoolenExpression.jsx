function BoolenExpression({topic}) {
  const element_1 = <h2> Hello - {topic}</h2>;
  const element_2 = <h2> World - {topic}</h2>;

  if (1 === 2) {
    return element_1 
  }
  else {
    return element_2
  }
}

export default BoolenExpression;
