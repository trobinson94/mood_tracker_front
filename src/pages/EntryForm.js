import React, { useState } from "react";

const EntryForm = ({ initialMood, handleSubmit, buttonLabel, history }) => {
    ////////////////
    // The Form Data State
    ////////////////
    const [formData, setFormData] = useState(initialMood);

    ////////////////
    // Functions
    ////////////////
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value });
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        handleSubmit(formData);
        history.push("/");
    }

    return (
        <div>
        <div className="card">

            <div id="container">
                <form onSubmit={handleSubmission}>

                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="Very Bad"
                    />
                        <label for="1">1 - Very Bad</label>
                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="Bad"
                    />
                        <label for="2">2 - Bad</label>
                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="Meh"
                    />
                        <label for="3">3 - Meh</label>
                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="Good"
                    />
                        <label for="4">4 - Good</label>
                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="&#128528;"
                    />
                        <label for="5">&#128528;</label>
                    <h3>Notes</h3>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={formData.notes}
                        name="notes"
                    />
                    <h3>Did you take your meds?</h3>
                    <input
                        type="radio"
                        onChange={handleChange}
                        value={true}
                        name="meds"
                    />
                    <label for="yes meds">Yes</label>
                    <input
                        type="radio"
                        onChange={handleChange}
                        value={false}
                        name="meds"
                    />
                    <label for="no meds">No</label>

                    <input type="submit" id="submit" value={buttonLabel}/>
                </form>
            </div>
            
        </div>
        
        </div>
    )
}

export default EntryForm;