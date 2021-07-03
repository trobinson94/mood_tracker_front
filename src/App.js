import "./style.css"
import AllMoods from "./pages/AllMoods";
import SingleMood from "./pages/SingleMood";
import EntryForm from "./pages/EntryForm";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";

function App(props) {

  ////////////////////
  // Style Objects
  ////////////////////



  ////////////////////
  // State and other variables
  ////////////////////

  // Api url
  const url = "https://moods-app-api.herokuapp.com/moods/";

  // State to hold log of moods
  const [moods, setMoods] = useState([]);

  const nullMood = {
    score: "",
    notes: "",
    meds: ""
  };

  const [targetMood, setTargetMood] = useState(nullMood);

  ////////////////////
  // Functions
  ////////////////////

  const getMoods = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMoods(data);
  };

  const addMoods = async (newMood) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMood),
    });

    getMoods();
  }

  const getTargetMood = (mood) => {
    setTargetMood(mood);
    props.history.push("/edit");
  };

  const updateMood = async (mood) => {
    const response = await fetch(url + mood.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mood),
    });

    getMoods();
  }

  const deleteMood = async (mood) => {
    const response = await fetch (url + mood.id + "/", {
      method: "delete",
    });

    getMoods();
    props.history.push("/");
  }

  ////////////////////
  // useEffects
  ////////////////////

  useEffect(() => {
    getMoods();
  }, []);

  ////////////////////
  // Returned JSX
  ////////////////////

  return <div className="App">
      <div className="header">
        <Link to="/"><h1 id="logo">Perk<strong>Up</strong>!</h1></Link>
      </div>
      

      <Link to="/new"><button id="button" className="main-btn">Add new mood entry</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <AllMoods moods={moods} {...rp} />}
        />
        <Route
          path="/mood/:id"
          render={(rp) => 
            <SingleMood 
              {...rp} 
              moods={moods} 
              edit={getTargetMood}
              deleteMood={deleteMood} />}
        />
        <Route
          path="/new"
          render={(rp) => 
            <EntryForm 
              {...rp}
              initialMood={nullMood}
              handleSubmit={addMoods}
              buttonLabel="Add entry" 
            />}
        />
        <Route
          path="/edit"
          render={(rp) => 
            <EntryForm 
              {...rp} 
              initialMood={targetMood}
              handleSubmit={updateMood}
              buttonLabel="Update Entry"
            />}
        />
      </Switch>
    </div>
}

export default App;
