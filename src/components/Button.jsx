const Button = ({ text, variant, clicked, position = "center" }) => {
  return <button className={`btn_base body-regular ${variant} ${position}` } onClick={clicked}>{text}</button>;
};

export default Button;
