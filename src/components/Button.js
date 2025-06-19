const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick} style={{ margin: "5px" }}>
      {children}
    </button>
  );
};
export default Button;