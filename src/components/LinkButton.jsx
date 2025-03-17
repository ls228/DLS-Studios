import React from "react";
import "./LinkButton.css";

const LinkButton = ({ url, text }) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button className="link-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default LinkButton;
