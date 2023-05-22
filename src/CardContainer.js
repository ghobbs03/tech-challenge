import React, { useState } from "react";
import Card from "./Card";

function CardContainer({ items }) {
    
    const cards = items.map((card) => {
        const dateObj = new Date(card.start_date * 1000);
        return <Card image={card.image} id={card.id} dateObj={dateObj} available_credits={card.available_credits} />
    })

    return (
        <ul className="cards">
            {cards}
        </ul>)

}

export default CardContainer;