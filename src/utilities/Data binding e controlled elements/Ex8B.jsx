import { useState } from "react";
import { exListTextB } from "../List-Exercises";
import afromalen from '../img/afromalen.png';

export default function Ex8B() {

    const [currency, setCurrency] = useState('EUR');

    const currencyLocal = {
        EUR: 'it-IT',
        USD: 'en-US',
        GBP: 'en-GB',
    };

    const exchangeRates = {
        EUR: 1,
        USD: 1.14,
        GBP: 0.86,
    };

    const priceAfroMalen = 150000000.00;

    const convertedPrice = priceAfroMalen * exchangeRates[currency];

    const formattedPrice = new Intl.NumberFormat(currencyLocal[currency], { style: 'currency', currency: currency }).format(convertedPrice);

    return (
        <div>
            <h6>{exListTextB[7].text}</h6>
            <div className="card w-50 my-3">
                <div class="row g-0">
                    <div class="col-4">
                        <img src={afromalen} className="card-img" />
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 className="card-title">AfroMalen</h5>
                            <p className="card-text">AfroMalen è il fratello gemello del famoso Donyell, attaccante della Roma</p>
                        </div>
                    </div>
                </div>
            </div>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)} id="price" className="form-select">
                <option value='EUR'>EUR €</option>
                <option value='USD'>USD $</option>
                <option value='GBP'>GBP £</option>
            </select>
            <div>
                <h4>Prezzo Cartellino Giocatore:</h4>
                <p>{formattedPrice}</p>
            </div>
        </div>
    )
}