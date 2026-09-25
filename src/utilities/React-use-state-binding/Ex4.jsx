import { useState } from "react";
import { exList } from "./List-Exercises";


export default function Ex4() {

    const [language, setLanguage] = useState('Benvenuti!!')

    return (
        <div>
            <h6>{exList[3].text}</h6>
            <h2 className="h1 text-center text-uppercase">{language}</h2>
            <div className="container m-3 d-flex gap-3">
                <button onClick={() => setLanguage('Benvenuti!!')} className="btn btn-primary">Italiano</button>
                <button onClick={() => setLanguage('Welcome!!')} className="btn btn-primary">Inglese</button>
                <button onClick={() => setLanguage('Bienvenidos!!')} className="btn btn-primary">Spagnolo</button>
                <button onClick={() => setLanguage('üdvözlöm!')} className="btn btn-primary">Ungherese</button>
                <button onClick={() => setLanguage('Wilkommen!!')} className="btn btn-primary">Tedesco</button>
                <button onClick={() => setLanguage('Bienvenue!!')} className="btn btn-primary">Francese</button>
                <button onClick={() => setLanguage('Yokoso!!')} className="btn btn-primary">Giapponese</button>
                <button onClick={() => setLanguage('Dobro pozhalovat!!')} className="btn btn-primary">Russo</button>
            </div>
        </div>
    )
}