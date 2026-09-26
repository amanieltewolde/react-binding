import { useState } from "react";
import { exListTextA } from "../List-Exercises";



export default function Ex5() {

    const christmasList = [
        {
            persona: 'Mamma',
            isDone: false,
        },
        {
            persona: 'Laura',
            isDone: false,
        },
        {
            persona: 'Papà',
            isDone: false,
        },
        {
            persona: 'Bobby',
            isDone: false,
        },
        {
            persona: 'Gasp',
            isDone: false,
        },
        {
            persona: 'Paulo',
            isDone: false,
        },
    ]

    const [done, setDone] = useState(false);

    function handleDone(i) {
    }

    return (
        <div>
            <h6>{exListTextA[4].text}</h6>
            <div className="container bg-danger text-white">
                <h4 className=" text-center bg-success">Regali di natale</h4>
                <ul className="list-group">
                    {christmasList.map((pax, i) => (
                        <li key={pax.persona} onClick={() => handleDone(i)} className="list-group-item">{pax.persona}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}