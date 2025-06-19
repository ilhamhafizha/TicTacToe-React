import Button from "./Button"
import React from "react";

const Timeline = ({ timeLine = [], onTimeLineItemClick, currentState }) => {
  return (
    <>
      <h2>History</h2>
      {


        timeLine.map((item, index) => {
          let buttonText = `Langkah #${index}`;
          if (index === 0) {
            buttonText = "Start Game";
          }
          return (
            <Button
              active={currentState === index}
              key={index}
              onClick={() => onTimeLineItemClick(index)}
            >
              {buttonText}
            </Button>
          )
        })
      }
    </>
  );
}

export default Timeline;  