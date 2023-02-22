import React from "react";
import "../button/Button.css";

const Button = ({ type, value, onClick, task }) => (
  <button type={type} onClick={onClick} task={task}>
    {value}
  </button>
);
export default Button;
