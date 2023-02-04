import React, { useEffect, useState }  from "react";
import { useLayoutEffect } from "react";

const UseLayoutEffectExample = () => {
  const [statedata, setData] = useState("something")
  const [count, setCount] = useState(0)
  useEffect (() => {
    console.log("useEffect called");
    return useEfReturn
  },[statedata])
  useLayoutEffect(() => {
    console.log("called useLayoutEffect");
    return useEfReturn
  },[])
  let useEfReturn = () => {
    console.log("btnClick called");
    // setData("data")
  }
  let btnClick = () => {
    console.log("btnClick called");
    setData("data")
  }
  let increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
        <button onClick={btnClick}>Click</button>
        <br />
        <h2>increment decrement</h2>
        <button onClick={increment}>increment</button> {count}  <button onClick={() => {setCount(count - 1)}}>decrement</button>
    </div>
  )
};

export default UseLayoutEffectExample;
