import React, { useState } from "react";
import "../button/Button.css";

const Button = ({ key, type, value, onClick, className }) => {
  // updateReview = () => {
  //   setColor(true);
  // };

  return (
  <button key={key} type={type} onClick={onClick} className={className}>
    {value}
  </button>
)};
export default Button;
