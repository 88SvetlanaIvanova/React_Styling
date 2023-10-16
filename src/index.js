//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

let greetingText = "Good";

const colorStyle = {
  color: "blue"
};
const day = new Date();
if (day.getHours() < 12) {
  greetingText = "Good Morning";
  colorStyle.color = "red";
} else if (day.getHours() < 18) {
  greetingText = "Good evening";
  colorStyle.color = "green";
} else {
  greetingText = "Good Night";
  colorStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={colorStyle}>
    {greetingText}
  </h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
