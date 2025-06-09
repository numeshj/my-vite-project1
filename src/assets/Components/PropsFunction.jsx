function PropsComponent(props) {
  return (
    <div>
      <h2>Props Passing Example</h2>
      <h2> Name : {props.name} </h2>
      <h2>
        <button onClick={() => props.functionAge(props.age, props.name)}>Show Age</button>
      </h2>
    </div>
  );
}

function PropsPass() {
  function selectAge(age, name) {
    alert(`Age of ${name} is ${age}`);
  }
  return (
    <div>
      <PropsComponent name="John Doe" age={30} functionAge={selectAge} />
      <PropsComponent name="Jane Smith" age={25} functionAge={selectAge} />
    </div>
  );
}

export default PropsPass;
