import Button from "./Button"
import React from "react";

const Timeline = ({ timeLine = [], onTimeLineItemClick }) => {
  return (
    <>
      <h2>History</h2>
      {
        timeLine.map((item, index) => (
          <Button
            key={index}
            onClick={() => onTimeLineItemClick?.(index)}
          >
            Langkah #{index + 1}
          </Button>
        ))
      }
    </>
  );
}

export default Timeline;  