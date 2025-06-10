import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect1 from './assets/components/useEffect_1.jsx'
import UseEffect2 from './assets/components/useEffect_2.jsx'
import UseRef from './assets/components/useRef.jsx'
import OneParentElement from './assets/components/OneParentElement.jsx'
import VariableEliments from './assets/Components/VariableEliments.jsx'
import MultyElements from './assets/Components/MultyElements.jsx'
import EmptyElement from './assets/Components/EmptyEleement.jsx'
import ElementList from './assets/Components/ElementList.jsx'
import ArrayMapping from './assets/Components/ArrayMapping.jsx'
import RelativeFunction from './assets/Components/RelativeFunction.jsx'
import MyComponenet from './assets/Components/MyComponent.jsx'
import CustomPropos from './assets/Components/CustomPropos.jsx'
import PropsPass from './assets/Components/PropsFunction.jsx'
import BoolenExpression from './assets/Components/BoolenExpression.jsx'
import BoolenInlineIf from './assets/Components/BoolenInlineIf.jsx'
import ChildElemenet from './assets/Components/ChildElement.jsx'
import FunctionRetunElement from './assets/Components/FunctionRetunElement.jsx'
import FunctionRetunElement_2 from './assets/Components/FunctionRetunElement2.jsx'

function App() {
  const topics = {
    //Topics for the components
    boolenExpression: "Boolen Expression",
    boolenInlineIf: "Boolen In Line If",
    childElement: "Child Element",
    functionReturnElement: "Function Retun Element",
    functionReturnElement2: "Function Retun Element 2",
    useEffect1: "Use Effect 1",
    useEffect2: "Use Effect 2",
    useRef: "Use Ref",
    oneParentElement: "One Parent Element"
    

  }

  return (
    <div>
      <VariableEliments />
      <hr />
      <MultyElements />
      <hr />
      <EmptyElement />
      <hr />
      <ElementList />
      <hr />
      <ArrayMapping />
      <hr />
      <RelativeFunction />
      <hr />
      <MyComponenet />
      <hr />
      <CustomPropos />
      <hr />
      <PropsPass />
      <hr />
      <BoolenExpression topic={<h2>{topics.boolenExpression}</h2>} />
      <hr />
      <BoolenInlineIf topic={<h2>{topics.boolenInlineIf}</h2>} />
      <hr />
      <ChildElemenet topic={<h2>{topics.childElement}</h2>} />
      <hr />
      <FunctionRetunElement topic={<h2>{topics.functionReturnElement}</h2>} />
      <hr />
      <FunctionRetunElement_2 topic={<h2>{topics.functionReturnElement2}</h2>} />
      <hr />
      <UseEffect1 topic={<h2>{topics.useEffect1}</h2>} />
      <hr />
      <UseEffect2 topic={<h2>{topics.useEffect2}</h2>} />
      <hr />
      <UseRef topic={<h2>{topics.useRef}</h2>} />
      <hr />
      <OneParentElement topic={<h2>{topics.oneParentElement}</h2>} />
      <hr />
    </div>
  )
}

export default App