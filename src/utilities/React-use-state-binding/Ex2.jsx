import { useState } from "react"

export default function Ex2() {

    const [isPrimary, setIsPrimary] = useState(true);

    function handleBtnColor() {

        setIsPrimary(!isPrimary);
    }


    return (
        <div className="my-5">
            <h6>2.Crea un bottone che alterni la propria classe stilistica (es. da primary a success) ad ogni click, mutandone dinamicamente l'aspetto grafico</h6>
            <div className="container w-25 text-center">
                <button onClick={handleBtnColor} className={`btn ${isPrimary ? 'btn-primary' : 'btn-success'} fs-3`}>cambio colore</button>
            </div>
        </div>
    )
}