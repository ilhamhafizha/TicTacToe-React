const Button = ({ children, onClick, active }) => {
  return (
    <button className="button" onClick={onClick} style={{ margin: "5px" }} data-active={active}>
      {children}
    </button>
  );
};
export default Button;