import { useState } from "react"
import { exList } from "./List-Exercises";

export default function Ex2() {

    const [isPrimary, setIsPrimary] = useState(true);

    function handleBtnColor() {

        setIsPrimary(!isPrimary);
    }


    return (
        <div className="my-5">
            <h6>{exList[1].text}</h6>
            <div className="container w-25 text-center">
                <button onClick={handleBtnColor} className={`btn ${isPrimary ? 'btn-primary' : 'btn-success'} fs-3`}>cambio colore</button>
            </div>
        </div>
    )
}