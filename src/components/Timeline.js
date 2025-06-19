import Button from "./Button"
import React from "react";

const Timeline = ({ timeLine }) => {
  return (
    <>
      <h2>History</h2>
      {
        timeLine.map((item, index) => (
          <Button key={index}>Langkah #{index + 1}</Button>
        ))
      }
    </>
  );
}

export default Timeline;  