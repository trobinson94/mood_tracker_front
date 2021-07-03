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
                        value="&#128555;"
                    />
                        <label for="1" className="emoticon">&#128555;</label>
                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="&#128533;"
                    />
                        <label for="2" className="emoticon">&#128533;</label>
                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="&#128528;"
                    />
                        <label for="3" className="emoticon">&#128528;</label>
                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="&#128522;"
                    />
                        <label for="4" className="emoticon">&#128522;</label>
                    <input 
                        onChange={handleChange}
                        type="radio" 
                        id="data" 
                        name="score" 
                        value="&#128513;"
                    />
                    <label for="5" className="emoticon">&#128513;</label>
                    <span></span>
                    <h3>Notes</h3>
                    <input
                        type="text"
                        id="text"
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
                    <span></span>
                    <input type="submit" id="submit" value={buttonLabel}/>
                </form>
            </div>
            
        </div>
        
        </div>
    )
}

export default EntryForm;