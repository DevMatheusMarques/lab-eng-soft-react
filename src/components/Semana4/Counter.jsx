import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Navbar/>
      <div className="container">
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}>+3</button>
      </div>
    </>
  )
}
