import React from "react";
import Mood from "../components/mood";

const AllMoods = (props) => {
    return props.moods.map((mood) => <Mood mood={mood} key={mood.id} />);
};

export default AllMoods;