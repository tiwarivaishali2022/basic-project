import React, { useState } from 'react'

export default function App() {

  const [state, setState]= useState(0);

  const count = () => {
    setState(20)
  };
  return (
    <div>
      <p>Current State: {state}</p>
      <button onClick={count}>Update State</button>
    </div>
  )
}
