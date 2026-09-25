import { useState } from "react"

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
      <h6>1.Implementa un contatore numerico incrementabile via bottone e aggiungi un pulsante dedicato per azzerare istantaneamente il valore</h6>
      <div className="container w-25 text-center">
        <p className="fs-1">{numb}</p>
        <button onClick={() => handleIncrement()} className="btn btn-danger m-2">+1</button>
        <button onClick={handleReset} className="btn btn-success">Reset</button>
      </div>
    </div>

  )
}