import React from "react";
import { Link } from "react-router-dom";

const SingleMood = ({ moods, match, edit, deleteMood }) => {
    const id = parseInt(match.params.id);
    const mood = moods.find((mood) => mood.id === id)

    return (
        <div>
            <h1>{mood.score}</h1>
            <h2>{mood.notes}</h2>
            <h2>{mood.meds}</h2>
            <button onClick={(event) => edit(mood)}>Edit</button>
            <button onClick={(event) => deleteMood(mood)}>Delete</button>
            <Link to="/">
                <button>View All</button>
            </Link>
        </div>
    )
}

export default SingleMood;