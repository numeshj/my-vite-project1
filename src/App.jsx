import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect1 from './components/useEffect_1.jsx'
import UseEffect2 from './components/UseEffect_2.jsx'
import UseRef from './components/useRef.jsx'
import OneParentElement from './components/OneParentElement.jsx'
import VariableEliments from './components/VariableEliments.jsx'
import MultyElements from './components/MultyElements.jsx'
import EmptyElement from './components/EmptyEleement.jsx'
import ElementList from './components/ElementList.jsx'
import ArrayMapping from './components/ArrayMapping.jsx'
import RelativeFunction from './components/RelativeFunction.jsx'
import MyComponenet from './components/MyComponent.jsx'
import CustomPropos from './components/CustomPropos.jsx'
import PropsPass from './components/PropsFunction.jsx'
import BoolenExpression from './components/BoolenExpression.jsx'
import BoolenInlineIf from './components/BoolenInlineIf.jsx'
import ChildElemenet from './components/ChildElement.jsx'
import FunctionRetunElement from './components/FunctionRetunElement.jsx'
import FunctionRetunElement_2 from './components/FunctionRetunElement2.jsx'

function App() {
  const topics = {
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