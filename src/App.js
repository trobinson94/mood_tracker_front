import AllMoods from "./pages/AllMoods";
import SingleMood from "./pages/SingleMood";
import EntryForm from "./pages/EntryForm";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

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

  ////////////////////
  // Functions
  ////////////////////

  const getMoods = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMoods(data);
  };

  // const addMoods

  // const getTargetMood

  // const updateMood

  // const deleteMood

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
      <h1>All Mood Entries</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <AllMoods moods={moods} {...rp} />}
        />
        <Route
          exact
          path="/mood/:id"
          render={(rp) => <SingleMood {...rp} moods={moods} />}
        />
        <Route
          exact
          path="/new"
          render={(rp) => <EntryForm {...rp} />}
        />
        <Route
          exact
          path="/edit"
          render={(rp) => <EntryForm {...rp} />}
        />
      </Switch>
    </div>
}

export default App;
