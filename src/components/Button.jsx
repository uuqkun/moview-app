const Button = ({ text, variant }) => {
  return <button className={`btn_base body-regular ${variant}`}>{text}</button>;
};

export default Button;
