import React from "react";
import './Cards.css';

const Cards = ({ title, data }) => {
    return (
        <div className="weather-card">
            <h4>{title}</h4>
            <p>{data}</p>
        </div>
    )
};

export default Cards;