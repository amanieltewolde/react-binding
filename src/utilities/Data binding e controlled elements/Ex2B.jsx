import { exListTextB } from "../List-Exercises";
import { useState } from "react";

export default function Ex2B() {

    const nameList = ['gigi', 'balbo', 'miriam', 'fabio', 'voldemort', 'rocky', 'adriana'];

    const [inputText, setInputText] = useState('');

    const filteredList = nameList.filter(name => (

        name.includes(inputText.toLowerCase()))
    );


    return (
        <div>
            <h6>{exListTextB[1].text}</h6>
            <div className="container-fluid">
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" />
                <ul className="list-group w-25">
                    {filteredList.map(name => (
                        <li key={name} className="list-group-item mt-2 bg-warning">{name}</li>
                    )
                    )}

                </ul>
            </div>
        </div>
    )
}