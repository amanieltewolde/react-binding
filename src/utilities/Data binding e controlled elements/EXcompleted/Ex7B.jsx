import { useState } from "react";
import { exListTextB } from "../../List-Exercises";

export default function Ex7B() {

    const [sizeSelected, setSizeSelected] = useState('fs-4');

    function handleSizeselected(e) {
        setSizeSelected(e.target.value);


    }

    return (
        <div>
            <h6>{exListTextB[6].text}</h6>

            <div className="container form-check">
                <input value='fs-4' onChange={handleSizeselected} checked={sizeSelected === 'fs-4'} type="radio" name="size" id="normal-size" className="form-check-input" />
                <label htmlFor="normal-size" className="form-check-label">Testo Normale</label>
            </div>
            <div className="container form-check">
                <input value='fs-6' onChange={handleSizeselected} checked={sizeSelected === 'fs-6'} type="radio" name="size" id="small-size" className="form-check-input" />
                <label htmlFor="small-size" className="form-check-label">Testo Piccolo</label>
            </div>
            <div className="container form-check">
                <input value='fs-1' onChange={handleSizeselected} checked={sizeSelected === 'fs-1'} type="radio" name="size" id="big-size" className="form-check-input" />
                <label htmlFor="big-size" className="form-check-label">Testo Grande</label>
            </div>
            <p className={sizeSelected}>“La ragione non è nulla senza l'immaginazione.”</p>
        </div>
    )
}