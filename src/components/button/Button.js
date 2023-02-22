import React from "react";
import "../button/Button.css";

const Button = ({ type, value, onClick, task, className }) => (
  <button type={type} onClick={onClick} task={task} className={className}>
    {value}
  </button>
);
export default Button;
