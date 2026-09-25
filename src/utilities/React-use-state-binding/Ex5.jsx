import { useState } from "react";
import { exList } from "./List-Exercises";

export default function Ex5() {

    const [isDone, setIsDone] = useState(false);

    function handleIsDone() {
        setIsDone(!isDone);
    }

    return (
        <div>
            <h6>{exList[4].text}</h6>
            <div className="container bg-danger text-white">
                <h4 className=" text-center bg-success">Regali di natale</h4>
                <ul className="list-group">
                    <li onClick={handleIsDone} className={`list-group-item ${isDone ? 'text-decoration-line-through' : ''}`}>Mamma</li>
                    <li onClick={handleIsDone} className={`list-group-item ${isDone ? 'text-decoration-line-through' : ''}`}>Laura</li>
                    <li onClick={handleIsDone} className={`list-group-item ${isDone ? 'text-decoration-line-through' : ''}`}>Papà</li>
                    <li onClick={handleIsDone} className={`list-group-item ${isDone ? 'text-decoration-line-through' : ''}`}>Bobby</li>
                    <li onClick={handleIsDone} className={`list-group-item ${isDone ? 'text-decoration-line-through' : ''}`}>Gasp</li>
                    <li onClick={handleIsDone} className={`list-group-item ${isDone ? 'text-decoration-line-through' : ''}`}>Paulo</li>
                </ul>
            </div>
        </div>
    )
}