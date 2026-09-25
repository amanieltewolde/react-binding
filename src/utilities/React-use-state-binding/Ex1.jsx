import { useState } from "react"
import { exList } from "./List-Exercises";

export default function Ex1() {

  const [numb, setNumb] = useState(0);

  function handleIncrement() {
    setNumb(numb + 1);
  }

  function handleReset() {
    setNumb(0);
  }

  return (
    <div>
      <h6>{exList[0].text}</h6>
      <div className="container w-25 text-center">
        <p className="fs-1">{numb}</p>
        <button onClick={() => handleIncrement()} className="btn btn-danger m-2">+1</button>
        <button onClick={handleReset} className="btn btn-success">Reset</button>
      </div>
    </div>

  )
}