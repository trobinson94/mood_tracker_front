import React from "react";
import { Link } from "react-router-dom";

const Mood = ({ mood }) => {
    return (
        <div>
            <Link to={`/mood/${mood.id}`}>
                <h1>{mood.score}</h1>
            </Link>
            <h2>{mood.notes}</h2>
        </div>
    )
}

export default Mood;