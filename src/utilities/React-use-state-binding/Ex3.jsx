import { useState } from "react";
import { exList } from "./List-Exercises";

export default function Ex3() {
    const [textAlign, setTextAlign] = useState('text-start');


    return (
        <div>
            <h6>{exList[2].text}</h6>
            <div className="container bg-secondary p-5 m-5 d-flex gap-3 justify-content-center ">
                <button onClick={() => setTextAlign('text-start')} className="btn btn-warning">Testo a sinistra</button>
                <button onClick={() => setTextAlign('text-center')} className="btn btn-dark">Testo centrale</button>
                <button onClick={() => setTextAlign('text-end')} className="btn btn-danger">Testo a destra</button>
            </div>
            <p className={`fs-6 mark text-uppercase ${textAlign}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}