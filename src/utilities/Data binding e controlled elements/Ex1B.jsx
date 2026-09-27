import { useState } from "react";
import { exListTextB } from "../List-Exercises";
import { ChevronRight } from "lucide-react";

export default function Ex1B() {

    const [inputText, setInputText] = useState('')

    return (
        <div>
            <h6>
                {exListTextB[0].text}
            </h6>
            <div className="container m-2">
                <label htmlFor="name" className="input-group h6">
                    Nome
                </label>
                <input id="name" value={inputText} onChange={(e) => setInputText(e.target.value)} className="form-control" placeholder="Inserisci qui il tuo nome" />
                <div className="mt-3 d-flex gap-2" >
                    <p className="fw-bold">Numero Caratteri Usati</p><ChevronRight /> <p>{inputText.length}</p>
                </div>
            </div>
        </div>
    )
}