import { useState } from "react";
import { exListTextB } from "../../List-Exercises";

export default function Ex5B() {

    const [hasAccepted, setHasAccepted] = useState(false)


    return (
        <div>
            <h6>{exListTextB[4].text}</h6>
            <div className="container form-check d-flex gap-3 align-items-center my-3">
                <input type="checkbox" id="terms" checked={hasAccepted} onChange={e => setHasAccepted(e.target.checked)} className="form-check-input" />
                <label htmlFor="terms" className="form-check-label">Accetto i <a href="#">Termini del contratto</a></label>
                <button className={`btn btn-primary ${hasAccepted ? '' : 'disabled'}`}>Procedi</button>
            </div>
        </div>
    )
}