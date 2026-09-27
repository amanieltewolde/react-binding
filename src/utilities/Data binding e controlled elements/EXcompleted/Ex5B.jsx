import { exListTextB } from "../../List-Exercises";
import { useState } from "react";

export default function Ex5B() {

    const [isBold, setIsBold] = useState(false);
    const [isUnderlined, setIsUnderlined] = useState(false);
    const [isMarked, setIsMarked] = useState(false);


    const style = {
        fWeight: isBold ? 'fw-bold' : 'fw-normal',
        fDecoration: isUnderlined ? 'text-decoration-underline' : 'text-decoration-none',
        fMark: isMarked ? 'mark' : '',
    }

    const { fWeight, fDecoration, fMark } = style;

    return (
        <div>
            <h6>{exListTextB[5].text}</h6>
            <div className="container">

                <div className="form-check">
                    <input checked={isBold} onChange={e => setIsBold(e.target.checked)} className="form-check-input" type="checkbox" id="bold" />
                    <label className="form-check-label" htmlFor="bold">grassetto</label>
                </div>

                <div className="form-check">
                    <input checked={isUnderlined} onChange={e => setIsUnderlined(e.target.checked)} className="form-check-input" type="checkbox" id="underlined" />
                    <label className="form-check-label" htmlFor="underlined">sottolineato</label>
                </div>

                <div className="form-check">
                    <input checked={isMarked} onChange={e => setIsMarked(e.target.checked)} className="form-check-input" type="checkbox" id="mark" />
                    <label className="form-check-label" htmlFor="mark">evidenziato</label>
                </div>

                <p className={`fs-3 ${fDecoration} ${fMark} ${fWeight}`} >"Chiudete le valigie, amici! Andiamo a Berlino, Beppe!"</p>
            </div>

        </div>
    )
}