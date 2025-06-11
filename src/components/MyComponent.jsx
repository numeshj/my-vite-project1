
function SampleComponenet(){
  return (
    <div>
      This is a sample component.
    </div>
  )
}

function MyComponenet() {
  return (
    <div>
      <h2> Re Using Componenet</h2>
      <SampleComponenet />
      <SampleComponenet />
    </div>
  )
}




export default MyComponenet