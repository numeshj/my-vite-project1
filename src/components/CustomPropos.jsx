
function PropsPass(prop){
  return (
    <div>
      <h1>Props Passing Example</h1>
      <h2> Name : {prop.name} </h2>
      <h3> Age : {prop.age} </h3>
    </div>
  )
}

function CustomPropos() {
  return (
    <div>
      <PropsPass name="Rukshani" age={30} />
      <PropsPass name="Chamalka" age={25} />

    </div>
  )
}

export default CustomPropos