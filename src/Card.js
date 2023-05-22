import React from "react";
import { useState } from "react";

function Card({image, id, dateObj, available_credits}) {
    const [isPurchased, setIsPurchased] = useState(false);

        // code on ordinals taken from MDN documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules

        const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

        const suffixes = new Map([
            ["one", "st"],
            ["two", "nd"],
            ["few", "rd"],
            ["other", "th"]
        ]);
        const formatOrdinals = (n) => {
            const rule = pr.select(n);
            const suffix = suffixes.get(rule);
            return `${n}${suffix}`;
        };
    
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
    

    return(<li className="card_item">
            <div className="card">
                <div className="card_image">
                    <img src={image} /></div>
                <div className="card_content">
                    <div>
                    <h4 className="card_title">Project Item {id.slice(-1)}</h4>
                    <button className={isPurchased ? "orange_button" : "green_button"} onClick={() => setIsPurchased(!isPurchased)}>{isPurchased ? "Purchased" : "Purchase"}</button>
                    </div>
                    <div>
                        <p className="card_text">{formatOrdinals(dateObj.getDate()) + " " + monthNames[dateObj.getMonth()] + " " + dateObj.getFullYear()}
                        <br />
                        {available_credits} credits
                        </p>
                        
                    </div>
                </div>
            </div>
        </li>)
}

export default Card;