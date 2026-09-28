import { useState } from "react";
import { exListTextB } from "../../List-Exercises";

export default function Ex9B() {

    const [userText, setUserText] = useState('');


    const maxCharacters = 50;

    const charactersLeft = maxCharacters - userText.length;

    const warningCharactersAlert = charactersLeft <= 10;

    function handleCharacters(e) {
        if (e.target.value.length <= maxCharacters) {
            setUserText(e.target.value)
        }
    }
    return (
        <div>
            <h6>{exListTextB[8].text}</h6>
            <div className="container">
                <label htmlFor="feedback" className="form-label fw-bolder">
                    Feedback
                </label>
                <textarea value={userText} onChange={handleCharacters} id="feedback" placeholder="Inserisci il tuo feedback qui..." className="form-control"></textarea>
                <p className={`text-end ${warningCharactersAlert ? 'text-danger' : ''}`}>Caratteri rimanenti: {charactersLeft}</p>
            </div>
        </div>
    )
}