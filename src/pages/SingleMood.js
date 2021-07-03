import React from "react";
import { Link } from "react-router-dom";

const SingleMood = ({ moods, match, edit, deleteMood }) => {
    const id = parseInt(match.params.id);
    const mood = moods.find((mood) => mood.id === id)

    return (
        <div>
            <div className="card">
                <div id="container">
                    <h1>{mood.score}</h1>
                    <h2>{mood.notes}</h2>
                    <h2>Meds taken: {mood.meds.toString()}</h2>
                </div> 
            </div>
            <div className="options">
                <button id="submit" onClick={(event) => edit(mood)}>Edit</button>
                <button id="submit" onClick={(event) => deleteMood(mood)}>Delete</button>
                <Link to="/">
                    <button id="submit">View All</button>
                </Link>
            </div>
         </div>
    )
}

export default SingleMood;