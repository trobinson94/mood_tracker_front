import React from "react";
import { Link } from "react-router-dom";

const Mood = ({ mood }) => {
    return (
        <Link to={`/mood/${mood.id}`}>
            <div className="card">
                <div id="container">
                    <h2 id="time">{mood.created_at.slice(0, 10)}</h2>
                    <h1 className="emoticon">{mood.score}</h1>
                    <h2>{mood.notes}</h2>
                    <h2><strong>Meds taken:</strong> {mood.meds.toString()}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Mood;