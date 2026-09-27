import { exListTextB } from "../../List-Exercises";
import { User } from "lucide-react";
import { useState } from "react";

export default function Ex3B() {

    const [inputText, setInputText] = useState('');

    const [newName, setNewName] = useState('Bob Marley')

    function handleNewName() {
        setNewName(inputText)
    }

    return (
        <div>
            <h6>{exListTextB[2].text}</h6>

            <div className="container-fluid d-flex gap-3">
                <div>
                    <label htmlFor="new-name" className="form-label">
                        Nuovo Nome Utente
                    </label>
                    <input value={inputText} onChange={e => setInputText(e.target.value)} id="new-name" className="form-control" placeholder="Inserisci qui..." />
                    <button onClick={handleNewName} className="btn btn-primary my-3">Crea</button>
                </div>
                <div className="container d-flex gap-2 align-items-center">
                    <User />
                    <h1>{newName}</h1>
                </div>
            </div>
        </div>
    )
}