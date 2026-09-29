import { useState } from "react";
import { exListTextB } from "../../List-Exercises";

export default function Ex10B() {

    const [inputText, setInputText] = useState('');

    const lowSafetyLenght = 5;
    const mediumSafetyLenght = 10;

    const currentCharacters = inputText.length;

    let validation = '';
    let statustColor = '';

    if (currentCharacters < lowSafetyLenght) {
        validation = 'Livello sicurezza password: Basso';
        statustColor = 'text-danger';
    } else if (currentCharacters >= lowSafetyLenght && currentCharacters < mediumSafetyLenght) {
        validation = 'Livello sicurezza password Medio';
        statustColor = 'text-warning';
    } else {
        validation = 'Livello sicurezza password: Alto';
        statustColor = 'text-success';
    }

    function handleInputText(e) {
        setInputText(e.target.value);
    }

    return (
        <div>
            <h6>{exListTextB[9].text}</h6>
            <div className="containeir w-50 mb-3">
                <label htmlFor='passwprd' className="form-label ">
                    Nuova Password
                </label>
                <input value={inputText} onChange={handleInputText} type="password" aria-describedby="validation" className="form-control" id="password" />

                {inputText && <div id="validation" className={statustColor}>
                    <p>{validation}</p>
                </div>}
            </div>
        </div>
    )
}