import { useState } from "react";
import { exListTextB } from "../../List-Exercises";

export default function Ex4B() {

    const [firstname, setFirstname] = useState('')

    const [lastname, setLastname] = useState('')

    const fullname = firstname + ' ' + lastname;


    return (
        <div>
            <h6>{exListTextB[3].text}</h6>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Firstname</label>
                <input value={firstname} onChange={e => setFirstname(e.target.value)} id="firstname" aria-label="firstname" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Lastname</label>
                <input value={lastname} onChange={e => setLastname(e.target.value)} id="lastname" aria-label="lastname" className="form-control" />
            </div>

            <p className="fw-bold fs-3 m-3">A {fullname} piace molto React!</p>
        </div>
    )
} 