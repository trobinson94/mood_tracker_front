import AllMoods from "./pages/AllMoods";
import SingleMood from "./pages/SingleMood";
import EntryForm from "./pages/EntryForm";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SinglePost from "../../../../todofront/src/pages/SinglePost";

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



  ////////////////////
  // useEffects
  ////////////////////



  ////////////////////
  // Returned JSX
  ////////////////////

  return (
    <div className="App">
      <h1>All Mood Entries</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllMoods {...rp} moods={moods} />}
        />
        <Route
          exact
          path="/mood/:id"
          render={(routerProps) => <SinglePost {...rp} moods={moods} />}
        />
        <Route
          exact
          path="/new"
          render={(routerProps) => <EntryForm {...rp} />}
        />
        <Route
          exact
          path="/edit"
          render={(routerProps) => <EntryForm {...rp} />}
        />
      </Switch>
    </div>
  );
}

export default App;
