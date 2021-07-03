import React from "react";
import { Link } from "react-router-dom";

const Mood = ({ mood }) => {
    return (
        <div className="card">
            <div id="container">
                <Link to={`/mood/${mood.id}`}>
                    <h1>{mood.score}</h1>
                </Link>
                <h2>{mood.notes}</h2>
                <h2>Meds taken: {mood.meds.toString()}</h2>
            </div>
        </div>
    )
}

export default Mood;