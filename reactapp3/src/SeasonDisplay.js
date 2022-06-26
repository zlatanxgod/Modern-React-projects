import React from "react";
import "./SeasonDisplay.css";
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "Lets go summer",
    iconName: "sun",
  },

  winter: {
    text: "Its chilly",
    iconName: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const { text, iconName } = seasonConfig[season];
  console.log(text);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />

      {/* idk */}
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
