const Square = ({ value, onClick, index }) => {
  return (
    <div className="square" onClick={onClick}>
      <span style={
        {
          position: "absolute",
          top: "5px",
          left: "5px",
          fontSize: "12px",
          color: "gray"
        }
      } >{index}</span>
      {value}
    </div>
  );
};

export default Square;